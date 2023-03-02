import {COUNTER_CHANGE} from '../constants/constants';
const initialState = {
  UserName: '',
  PassWord: '',
};
const acountReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...action,
      };
    default:
      return state;
  }
};
export default acountReducer;
export const getAccount = state => state.Account;