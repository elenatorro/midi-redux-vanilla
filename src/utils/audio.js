export const AudioUtils = Object.freeze({
  getFrequency(note) {
    const LA_HZ  = 440;
    const LA_DEC = 69;
    const OCTAVE = 12;

    return LA_HZ * Math.pow(2, (note - LA_DEC) / OCTAVE);
  },

  generateOscillator(note, audioContext) {
    const frequency = this.getFrequency(note);
    let oscillator = audioContext.createOscillator();

    oscillator.type = 'square';
    oscillator.connect(audioContext.destination);
    oscillator.frequency.value = frequency;

    return oscillator;
  }
});
