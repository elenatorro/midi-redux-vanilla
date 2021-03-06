import MIDIAction from '../actions/midi-actions.js';
import MIDIConnect from '../actions/midi-connect.js';

const initialState = {
  message: 'None',
  inputs: [],
  data: null,
  audioContext: !!window.AudioContext ? new window.AudioContext() : new window.webkitAudioContext(),
  notes: {}
};

export default function MIDIEventsReducer(state=initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MIDIAction.NOTE_ON:
    case MIDIAction.NOTE_OFF:
    case MIDIAction.PROGRAM_CHANGE:
    case MIDIAction.INSTRUMENT_NAME:
    case MIDIAction.CONTROLLER:
    case MIDIAction.SYS_EX:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
