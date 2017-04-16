import MidiAction from '../actions/midi-actions';
import { MidiUtils } from '../utils/midi';
import { AudioUtils } from '../utils/audio';

export function testButtonAction() {
  return (dispatch) => {
    let message = 'clicked';

    dispatch({
      type: MidiAction.TEST_ACTION,
      payload: {
        message
      }
    });
  };
}

export function noteOn(event, message) {
  return (dispatch, getState) => {
    let data, state, notes, note, ac;

    data  = event.data;
    state = getState();
    notes = state.midi.notes;
    note  = MidiUtils.getNote(event);
    ac    = state.midi.audioContext;

    notes[note] = AudioUtils.generateOscillator(note, ac);
    notes[note].start();

    dispatch({
      type: MidiAction.NOTE_ON,
      payload: {
        message,
        data,
        notes
      }
    });
  };
}

export function noteOff(event, message) {
  return (dispatch, getState) => {
    let data, state, notes, note;

    data  = event.data;
    state = getState();
    notes = state.midi.notes;
    note  = MidiUtils.getNote(event);

    notes[note].stop();
    notes[note].disconnect();

    dispatch({
      type: MidiAction.NOTE_OFF,
      payload: {
        message,
        data,
        notes
      }
    });
  };
}

export function controller(event, message) {
  return (dispatch) => {

    dispatch({
      type: MidiAction.CONTROLLER,
      payload: {
        message
      }
    });
  };
}
