import MIDIAction from '../actions/midi-actions.js';
import MIDIConnect from '../actions/midi-connect.js';

const initialState = {
  message: 'None',
  midiAccess: null,
  inputs: [],
  data: null,
  audioContext: new AudioContext(),
  gainNode: null,
  notes: {}
};

export default function MIDIEventsReducer(state=initialState, action) {
  const { type, payload } = action;
  console.log('REDUCER', payload);
  switch (type) {
    case MIDIAction.NOTE_ON:
    case MIDIAction.NOTE_OFF:
    case MIDIAction.PROGRAM_CHANGE:
    case MIDIAction.INSTRUMENT_NAME:
    case MIDIAction.CONTROLLER:
    case MIDIAction.SYS_EX:
    case MIDIAction.TEST_ACTION:
    case MIDIConnect.MIDI_SUCCESS:
    case MIDIConnect.MIDI_FAILURE:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
