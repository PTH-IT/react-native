import {LOGGING_CHANGE} from '../constants/constants';

export function changeLogging(logging) {
  return {
    type: LOGGING_CHANGE,
    payload: logging,
  };
}
