import MidiConnect from '../actions/midi-connect';
import * as MidiMessages from '../action-creators/midi-messages-action-creators';
import { bindActionCreators } from 'redux';

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
        message: 'Connected',
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
        message: 'Fail'
      }
    });
  };
}
