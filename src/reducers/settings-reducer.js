import MIDIAction from '../actions/midi-actions.js';
import MIDIConnect from '../actions/midi-connect.js';

const initialState = {
  midiAccess: null,
  webApiAudio: false,
  gainNode: null,
  soundfontInstrument: null
};

export default function MIDIEventsReducer(state=initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MIDIConnect.MIDI_SUCCESS:
    case MIDIConnect.MIDI_FAILURE:
    case MIDIConnect.MIDI_LOAD_INSTRUMENT:
    case MIDIConnect.CHANGE_AUDIO:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
