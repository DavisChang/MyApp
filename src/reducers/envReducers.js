import { SET_PLATFORM } from '../constants/actionTypes';

export function env(state = { platform: 'desktop' }, action) {
  switch (action.type) {
    case SET_PLATFORM:
      return Object.assign({}, state, {
        platform: action.platform,
      });
    default:
      return state;
  }
}
