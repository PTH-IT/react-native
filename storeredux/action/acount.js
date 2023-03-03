import {COUNTER_CHANGE} from '@Constants/constants';

export function changeCount(Account) {
  return {
    type: COUNTER_CHANGE,
    ...Account,
  };
}
