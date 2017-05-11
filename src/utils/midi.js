/*jslint bitwise: true */

import { MidiMessagesHex } from '../constants/midi-messages-hex';

export const MidiUtils = Object.freeze({
  getType(data) {
    return data[0];
  },

  getNote(data) {
    return data[1];
  },

  getNoteVelocity(data) {
    return data[2];
  },

  getEventType(data) {
    return this.isNoteOnOff(data) ?
      MidiMessagesHex.NOTE_OFF & 0xf0
      : this.getType(data) & 0xf0;
  },

  isNoteOnOff(data) {
    return this.getType(data) === MidiMessagesHex.NOTE_ON &&
      this.getNoteVelocity(data) === 0;
  },

  setNoteOnMessage(target) {
    const NOTE_ON = 144;
    return new Uint8Array([NOTE_ON, event.target.getAttribute('data-note'), 1]);
  },

  setNoteOffMessage(target) {
    const NOTE_ON = 144;
    return new Uint8Array([NOTE_ON, event.target.getAttribute('data-note'), 0]);
  }
});
