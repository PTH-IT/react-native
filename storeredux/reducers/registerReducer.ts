import {REGISTER_PENDING,REGISTER_SUCCESS,REGISTER_ERROR} from '@Constants/constants';
const initialState = {
    pending: false,
    response: null,
    error: null,
    statuscode: null,
  };
export default function registerReducer(state = initialState , action){
    switch (action.type) {
        case REGISTER_PENDING:
            return {
                ...state,
                pending: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                response: action.response,
                error: null,
                statuscode:  action.statuscode
            }
        case REGISTER_ERROR:
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
export const getRegister = state => state.Register.response;
export const getRegisterPending = state => state.Register.pending;
export const getRegisterStatuscode = state => state.Register.statuscode;
export const getRegisterError = state => state.Register.error;