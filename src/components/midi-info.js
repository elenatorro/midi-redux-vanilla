export const MidiInfo = {
  init(store={}, midiEventsActions={}) {
    this.store       = store;
    this.messageInfo = document.getElementById('midi-info');
    this.testButton  = document.getElementById('test-button');
    this.testButton.addEventListener('click', midiEventsActions.testButtonAction);
    this.render();
  },

  render() {
    let store = this.store;
    let messageInfo = this.messageInfo;

    store.subscribe(() => {
      messageInfo.innerHTML = messageInfo ?
        store.getState().midi.message
        : 'No Message';
    });
  }
};
