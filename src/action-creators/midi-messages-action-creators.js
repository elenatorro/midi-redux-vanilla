import { MidiMessages } from '../constants/midi-messages';
import { MidiUtils } from '../utils/midi';
import * as MidiEvents from '../action-creators/midi-events-action-creators';

export function midiMessage(event) {
  return (dispatch, getState) => {
    let midiMessage, message;

    midiMessage = MidiUtils.getEventType(event.data);
    message = MidiMessages[midiMessage];

    dispatch(MidiEvents[message](event, message));
  };
}
