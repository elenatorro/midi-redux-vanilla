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
    const audio = event.target.value === "true";
    this.midiSetupActions.changeAudio(audio);
  },

  render() {
    const store = this.store;

    store.subscribe(() => {

    });
  }
};
