import {COUNTER_CHANGE} from '../constants/acount';

export function changeCount(Account) {
  return {
    type: COUNTER_CHANGE,
    payload: Account,
  };
}
