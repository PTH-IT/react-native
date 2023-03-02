import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_ERROR} from '../constants/constants';
const initialState = {
  pending: false,
  response: null,
  error: null,
};
const LoginReducer = (state = initialState, action) => {
    console.log(action)
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
export const getLogin = state => state.Api.response;
export const getLoginPending = state => state.Api.pending;
export const getLoginError = state => state.Api.error;