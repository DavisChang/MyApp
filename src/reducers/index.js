import { combineReducers } from 'redux';
import { env } from './envReducers';

const rootReducer = combineReducers({
  env,
});

export default rootReducer;
