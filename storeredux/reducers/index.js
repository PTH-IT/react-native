import {combineReducers} from 'redux';
import acountReducer from 'reduxreducers/accountReducer';
import languagesReducer from 'reduxreducers/languagesReducer';
import loggingReducer from 'reduxreducers/loggingReducer';
import LoginReducer from 'reduxreducers/loginReducer';
import registerReducer from 'reduxreducers/registerReducer';
import mobileReducer from 'reduxreducers/mobileReducer';
import tokenReducer from 'reduxreducers/tokenReducer';


const reducers = combineReducers({
    Account: acountReducer,
    LanGuages:languagesReducer,
    Logging: loggingReducer,
    Login: LoginReducer,
    Register: registerReducer,
    Mobile:mobileReducer,
    Token:tokenReducer

});
export default reducers;
