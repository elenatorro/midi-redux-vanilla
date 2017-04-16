/*jslint bitwise: true */

import { MidiMessagesHex } from '../constants/midi-messages-hex';

export const MidiUtils = Object.freeze({
  getType(event) {
    return event.data[0];
  },
  getNote(event) {
    return event.data[1];
  },
  getNoteVelocity(event) {
    return event.data[2];
  },
  getEventType(event) {
    return this.isNoteOnOff(event) ?
      MidiMessagesHex.NOTE_OFF & 0xf0
      : this.getType(event) & 0xf0;
  },
  isNoteOnOff(event) {
    return this.getType(event) === MidiMessagesHex.NOTE_ON &&
      this.getNoteVelocity(event) === 0;
  }
});
