export const MidiPiano = {
  init(store={}, midiEventsActions={}) {
    this.store = store;
    this.midiEventsActions = midiEventsActions;
    this.notes = document.getElementsByClassName('note');
    this.keys$  = {};

    _initKeyElements.call(this);

    this.render();
  },

  render() {
    const store = this.store;

    store.subscribe(() => {
      const state = store.getState();

      for (let note in state.midi.notes) {
        const key$ = this.keys$[note];
        const midiNote = state.midi.notes[note];
        const toggle = midiNote ? 'add' : 'remove';
        const playingClass = 'playing';

        key$.classList[toggle](playingClass);
      }
    });
  }
};

function _initKeyElements() {
  let noteNumber = 48;

  [].forEach.call(this.notes, (note) => {
    note.setAttribute('data-note', noteNumber);

    note.addEventListener('mousedown', this.midiEventsActions.noteOn);
    note.addEventListener('mouseup', this.midiEventsActions.noteOff);

    this.keys$[noteNumber] = note;
    noteNumber++;
  });
}
