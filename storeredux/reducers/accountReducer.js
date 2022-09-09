import {COUNTER_CHANGE} from '../constants/acount';
const initialState = {
  UserName: '',
  PassWord: '',
};
const acountReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
export default acountReducer;
