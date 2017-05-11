export const MidiAudioSelector = {
  init(store={}, midiSetupActions={}) {
    this.store = store;
    this.midiSetupActions = midiSetupActions;
    this.audioSelectors = document.getElementById('audio-selector').audioSelectors;


    this.audioSelectors.forEach((selector) => {
      selector.addEventListener('change', this.changeAudio.bind(this));
    });

    this.render();
  },

  changeAudio(event) {
    let audio = event.target.value === "true";
    this.midiSetupActions.changeAudio(audio);
  },

  render() {
    let store;

    store = this.store;

    store.subscribe(() => {
      let state;
      state = store.getState();
    });
  }
};
