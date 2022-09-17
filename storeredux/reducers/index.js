import {combineReducers} from 'redux';
import acountReducer from './accountReducer';
import languagesReducer from './languagesReducer';
import loggingReducer from './loggingReducer';


const reducers = combineReducers({
    Acount: acountReducer,
    LanGuages:languagesReducer,
    Logging: loggingReducer
});
export default reducers;
