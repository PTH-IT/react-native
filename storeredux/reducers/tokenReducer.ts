import {TOKEN_CHANGE} from 'constants/constants';
const initialState = {
    token: '',
    option:'',
  };
export default function tokenReducer(state = initialState , action){
    switch (action.type) {
        case TOKEN_CHANGE:
            return {
                ...state,
                token: action.token,
                option: action.option
            }
        default: 
            return state;
    }

}
export const getToken = state => state.Token.token;