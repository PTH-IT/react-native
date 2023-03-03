import {LOGGING_CHANGE} from '@Constants/constants';

export function changeLogging(logging) {
  return {
    type: LOGGING_CHANGE,
    payload: logging,
  };
}
