/* Soundfond Library:

  By Gleitz
  https://github.com/gleitz/midi-js-soundfonts/tree/gh-pages/FluidR3_GM

*/

export const InstrumentSets = Object.freeze({
  MUSYNG_KITE: 'MusyngKite',
  FLUID_R3_GM: 'FluidR3_GM'
});

export const InstrumentPathConfig = ({
  URL: 'http://localhost',
  PORT: 8001,
  SET: InstrumentSets.MUSYNG_KITE,
  URL_GITHUB: 'https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/'
});

export const SOUNDS_PATH =
  `${InstrumentPathConfig.URL_GITHUB}:${InstrumentPathConfig.PORT}/${InstrumentPathConfig.SET}`;

export const SOUNDS_FILETYPE = 'mp3';
export const SOUNDS_FILE_EXTENSION = 'js';
