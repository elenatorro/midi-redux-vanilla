export const AudioUtils = Object.freeze({
  getFrequency(note) {
    const
      LA_HZ  = 440,
      LA_DEC = 69,
      OCTAVE = 12
    ;

    return LA_HZ * Math.pow(2, (note - LA_DEC) / OCTAVE);
  },

  generateOscillator(note, audioContext) {
    let oscillator, frequency;

    oscillator = audioContext.createOscillator();
    frequency = this.getFrequency(note);

    oscillator.type = 'square';
    oscillator.connect(audioContext.destination);
    oscillator.frequency.value = frequency;

    return oscillator;
  }
});
