import {COUNTER_CHANGE} from 'constants/constants';

export function changeCount(Account) {
  return {
    type: COUNTER_CHANGE,
    ...Account,
  };
}
