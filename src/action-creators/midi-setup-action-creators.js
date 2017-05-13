import MidiConnect from '../actions/midi-connect';
import Soundfont from 'soundfont-player';
import * as MidiMessages from '../action-creators/midi-messages-action-creators';
import { bindActionCreators } from 'redux';

import {
  SOUNDS_PATH,
  SOUNDS_FILETYPE,
  SOUNDS_FILE_EXTENSION
} from '../constants/midi-soundpaths';

export function midiSuccess(midiAccess) {
  return (dispatch, getState) => {
    const state = getState();
    const midiMessages = bindActionCreators(MidiMessages, dispatch);
    const status = 'MIDI Succeeded';

    let inputs = midiAccess.inputs.values();
    let gainNode = state.midi.audioContext.createGain();

    gainNode.connect(state.midi.audioContext.destination);

    for(let input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = midiMessages.midiMessage;
    }

    dispatch({
      type: MidiConnect.MIDI_SUCCESS,
      payload: { status, midiAccess, inputs, gainNode }
    });
  };
}

export function midiFailure(midiAccess) {
  return (dispatch) => {
    const status = 'MIDI Failed';

    dispatch({
      type: MidiConnect.MIDI_FAILURE,
      payload: { status }
    });
  };
}

export function loadSoundfontInstrument(instrument) {
  return (dispatch, getState) => {
    const state = getState();
    const instrumentPath = _getInstrumentPath.call(this, instrument);
    let ac = state.midi.audioContext;

    Soundfont.instrument(ac, instrumentPath)
      .then((soundfontInstrument) => {
        dispatch({
          type: MidiConnect.MIDI_LOAD_INSTRUMENT,
          payload: { soundfontInstrument }
        });
      });
  };
}

export function changeAudio(audio) {
  return (dispatch) => {
    const webApiAudio = audio;

    dispatch({
      type: MidiConnect.CHANGE_AUDIO,
      payload: { webApiAudio }
    });
  };
}

function _getInstrumentPath(instrument) {
  return `${SOUNDS_PATH}/${instrument}-${SOUNDS_FILETYPE}.${SOUNDS_FILE_EXTENSION}`;
}
