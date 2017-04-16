import configureStore from './src/store/configureStore';
import { MidiInfo } from './src/components/midi-info';
import * as MidiEvents from './src/action-creators/midi-events-action-creators';
import * as MidiSetup from './src/action-creators/midi-setup-action-creators';
import { bindActionCreators } from 'redux';

const store = configureStore();
const midiSetupActions = bindActionCreators(MidiSetup, store.dispatch);
const midiEventsActions = bindActionCreators(MidiEvents, store.dispatch);

MidiInfo.init(store, midiEventsActions);

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({sysex: false}).then(midiSetupActions.midiSuccess);
}
