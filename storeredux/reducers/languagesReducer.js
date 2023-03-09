import {LANGUAGES_CHANGE} from 'constants/constants';
const initialState =  'vn'
const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGES_CHANGE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
export default languagesReducer;
