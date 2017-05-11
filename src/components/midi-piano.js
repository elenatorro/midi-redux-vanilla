export const MidiPiano = {
  init(store={}, midiEventsActions={}) {
    this.store = store;
    this.midiEventsActions = midiEventsActions;
    this.notes = document.getElementsByClassName('note');
    this.keys  = {};

    _initKeyElements.call(this);

    this.render();
  },

  render() {
    let store;

    store = this.store;

    store.subscribe(() => {
      let note, state;
      state = store.getState();

      for (note in state.midi.notes) {
        _togglePlayingNote.call(this, state.midi.notes[note], this.keys[note]);
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

    this.keys[noteNumber] = note;
    noteNumber++;
  });
}

function _togglePlayingNote(note, key) {
  return note ?
    key.classList.add('playing')
    : key.classList.remove('playing');
}
