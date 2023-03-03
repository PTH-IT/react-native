import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_ERROR} from '@Constants/constants';
const initialState = {
  pending: false,
  response: null,
  error: null,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: 
            return {
                ...state,
                pending: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                response: action.response
            }
        case LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
  }
export default LoginReducer;
export const getLogin = state => state.Login.response;
export const getLoginPending = state => state.Login.pending;
export const getLoginError = state => state.Login.error;