import {LOGGING_CHANGE} from '../constants/logging';
const initialState = 
    "DEFAULT"
;
const loggingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_CHANGE:
      return  action.payload
    default:
      return state;
  }
};
export default loggingReducer;
