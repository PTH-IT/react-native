import {TOKEN_CHANGE} from 'constants/constants';

export function TokenChange(token,option) {
  return {
      type: TOKEN_CHANGE,
      token: token,
      option: option
  }
}