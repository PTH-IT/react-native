import {combineReducers} from 'redux';
import acountReducer from '@reduxreducers/accountReducer';
import languagesReducer from '@reduxreducers/languagesReducer';
import loggingReducer from '@reduxreducers/loggingReducer';
import LoginReducer from '@reduxreducers/loginReducer';
import registerReducer from '@reduxreducers/registerReducer';


const reducers = combineReducers({
    Account: acountReducer,
    LanGuages:languagesReducer,
    Logging: loggingReducer,
    Login: LoginReducer,
    Register: registerReducer

});
export default reducers;
