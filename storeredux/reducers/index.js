import {combineReducers} from 'redux';
import acountReducer from './accountReducer';
import languagesReducer from './languagesReducer';

const reducers = combineReducers({
    Acount: acountReducer,
    LanGuages:languagesReducer,
});
export default reducers;
