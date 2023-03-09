import {MOBILE_CHANGE} from 'constants/constants';
const initialState = {
    width: 0,
    heidth: 0,
  };
  const MobileReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOBILE_CHANGE: 
              return {
                  ...state,
                  width: action.width,
                  heidth: action.heidth,
              }
          default: 
              return state;
      }
    }
  export default MobileReducer;
  export const getWidth= state => state.Mobile.width;
  export const getHeidth = state => state.Mobile.heidth;