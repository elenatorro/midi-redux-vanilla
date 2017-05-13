import { MIDIInstruments } from '../constants/midi-instruments';

export const MidiInstrumentsSelector = {
  init(store={}, midiSetupActions={}) {
    this.store = store;
    this.midiSetupActions = midiSetupActions;
    this.instrumentSelector = document.getElementById('instrument-selector');

    this.instrumentSelector.addEventListener('change',
      this.loadInstrument.bind(this));

    _addInstrumentOptions.call(this);

    this.render();
  },

  loadInstrument(event) {
    const instrument = event.target.value;
    this.midiSetupActions.loadSoundfontInstrument(instrument);
  },

  render() {
    const store = this.store;

    store.subscribe(() => {
      const state = store.getState();
      const hiddenClass = 'hidden';
      const toggleHidden = state.settings.webApiAudio ? 'add' : 'remove';

      this.instrumentSelector.classList[toggleHidden](hiddenClass);
    });
  }
};


function _addInstrumentOptions() {
  for (let instrument in MIDIInstruments) {
    let instrumentOption = document.createElement('option');
    instrumentOption.value = MIDIInstruments[instrument];
    instrumentOption.text = MIDIInstruments[instrument];
    this.instrumentSelector.appendChild(instrumentOption);
  }
}
