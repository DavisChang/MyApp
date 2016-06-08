import { SET_PLATFORM } from '../constants/actionTypes';

export function setPlatform(platform) {
  return {
    type: SET_PLATFORM,
    platform,
  };
}
