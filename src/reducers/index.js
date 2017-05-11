import { combineReducers } from 'redux';

import midi from '../reducers/midi-reducer';
import settings from '../reducers/settings-reducer';

const rootReducer = combineReducers({
  midi,
  settings
});

export default rootReducer;
