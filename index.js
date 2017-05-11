import configureStore from './src/store/configureStore';
import { MidiPiano } from './src/components/midi-piano';
import { MidiInstrumentsSelector } from './src/components/midi-instruments-selector';
import { MidiAudioSelector } from './src/components/midi-audio-selector';
import * as MidiEvents from './src/action-creators/midi-events-action-creators';
import * as MidiSetup from './src/action-creators/midi-setup-action-creators';

import { bindActionCreators } from 'redux';

const store = configureStore();
const midiSetupActions = bindActionCreators(MidiSetup, store.dispatch);
const midiEventsActions = bindActionCreators(MidiEvents, store.dispatch);

MidiPiano.init(store, midiEventsActions);
MidiInstrumentsSelector.init(store, midiSetupActions);
MidiAudioSelector.init(store, midiSetupActions);

midiSetupActions.loadSoundfontInstrument('acoustic_grand_piano');

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({sysex: false})
    .then(midiSetupActions.midiSuccess);
}
