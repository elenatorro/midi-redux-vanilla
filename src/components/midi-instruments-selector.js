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
    let instrument = event.target.value;
    this.midiSetupActions.loadSoundfontInstrument(instrument);
  },

  render() {
    let store;

    store = this.store;

    store.subscribe(() => {
      let state;
      state = store.getState();

      if (state.settings.webApiAudio) {
        this.instrumentSelector.classList.add('hidden');
      } else {
        this.instrumentSelector.classList.remove('hidden');
      }
    });
  }
};


function _addInstrumentOptions() {
  let instrument, instrumentOption;

  for (instrument in MIDIInstruments) {
    instrumentOption = document.createElement('option');
    instrumentOption.value = MIDIInstruments[instrument];
    instrumentOption.text = MIDIInstruments[instrument];
    this.instrumentSelector.appendChild(instrumentOption);
  }
}
