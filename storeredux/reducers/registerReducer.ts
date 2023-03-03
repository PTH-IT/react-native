import {REGISTER_PENDING,REGISTER_SUCCESS,REGISTER_ERROR} from '@Constants/constants';
const initialState = {
    pending: false,
    response: null,
    error: null,
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
                pending: false,
                response: action.response
            }
        case REGISTER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }

}
export const getRegister = state => state.Register.response;
export const getRegisterPending = state => state.Register.pending;
export const getRegisterError = state => state.Register.error;