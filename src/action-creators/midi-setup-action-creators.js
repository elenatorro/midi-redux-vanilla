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
    let inputs, state, midiMessages, input, gainNode;

    inputs = midiAccess.inputs.values();
    state = getState();
    gainNode = state.midi.audioContext.createGain();
    gainNode.connect(state.midi.audioContext.destination);
    midiMessages = bindActionCreators(MidiMessages, dispatch);

    for(input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = midiMessages.midiMessage;
    }

    dispatch({
      type: MidiConnect.MIDI_SUCCESS,
      payload: {
        status: 'Midi Succeeded',
        midiAccess,
        inputs,
        gainNode
      }
    });
  };
}

export function midiFailure(midiAccess) {
  return (dispatch) => {
    dispatch({
      type: MidiConnect.MIDI_FAILURE,
      payload: {
        status: 'Midi Failed'
      }
    });
  };
}

export function loadSoundfontInstrument(instrument) {
  return (dispatch, getState) => {
    let state, ac, instrumentPath;

    state = getState();
    ac = state.midi.audioContext;
    instrumentPath = _getInstrumentPath.call(this, instrument);

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
  return (dispatch, getState) => {
    let state, webApiAudio;

    state = getState();
    webApiAudio = audio;

    dispatch({
      type: MidiConnect.CHANGE_AUDIO,
      payload: { webApiAudio }
    });
  };
}

function _getInstrumentPath(instrument) {
  return `${SOUNDS_PATH}/${instrument}-${SOUNDS_FILETYPE}.${SOUNDS_FILE_EXTENSION}`;
}
