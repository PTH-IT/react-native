import {LOGGING_CHANGE} from '../constants/logging';

export function changeLogging(logging) {
  return {
    type: LOGGING_CHANGE,
    payload: logging,
  };
}
