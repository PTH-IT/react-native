import {combineReducers} from 'redux';
import acountReducer from './accountReducer';
import languagesReducer from './languagesReducer';
import loggingReducer from './loggingReducer';
import ApiReducer from './api';


const reducers = combineReducers({
    Account: acountReducer,
    LanGuages:languagesReducer,
    Logging: loggingReducer,
    Api: ApiReducer

});
export default reducers;
