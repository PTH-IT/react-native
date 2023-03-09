import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_ERROR} from 'constants/constants';
const initialState = {
  pending: false,
  response: null,
  error: null,
  statuscode: null,
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
                response: action.response,
                error: null,
                statuscode:  action.statuscode
            }
        case LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                response: null,
                error: action.error,
                statuscode:  action.statuscode
            }
        default: 
            return state;
    }
  }
export default LoginReducer;
export const getLogin = state => state.Login.response;
export const getLoginPending = state => state.Login.pending;
export const getLoginStatuscode = state => state.Login.statuscode;
export const getLoginError = state => state.Login.error;