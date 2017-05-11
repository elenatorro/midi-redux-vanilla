import MidiAction from '../actions/midi-actions';
import { MidiUtils } from '../utils/midi';
import { AudioUtils } from '../utils/audio';


export function noteOn(event, message='noteOn') {
  return (dispatch, getState) => {
    let data, state, notes, note, ac;

    data = event.data ? event.data : MidiUtils.setNoteOnMessage(event.target);
    note = MidiUtils.getNote(data);

    state = getState();
    notes = state.midi.notes;
    ac    = state.midi.audioContext;

    if (state.settings.webApiAudio) {

      if (!notes[note]) {
        notes[note] = AudioUtils.generateOscillator(note, ac);
        notes[note].start();
      }

    } else {
      notes[note] = 'playing';
      state.settings.soundfontInstrument.play(note);
    }

    dispatch({
      type: MidiAction.NOTE_ON,
      payload: {
        message, data, notes
      }
    });
  };
}

export function noteOff(event, message='noteOff') {
  return (dispatch, getState) => {
    let data, state, notes, note;

    data = event.data ? event.data : MidiUtils.setNoteOffMessage(event.target);
    note = MidiUtils.getNote(data);

    state = getState();
    notes = state.midi.notes;

    if (state.settings.webApiAudio) {

      if (notes[note]) {
        notes[note].stop();
        notes[note].disconnect();
      }

    } else {
      state.settings.soundfontInstrument.stop(note);
    }

    notes[note] = null;

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
  return (dispatch, getState) => {
    let message;

    message = event.data;

    dispatch({
      type: MidiAction.CONTROLLER,
      payload: {
        message
      }
    });
  };
}
