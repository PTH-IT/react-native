import {  combineReducers } from 'redux';
import acountReducer from './accountReducer';
 const reducers = combineReducers(
{ Acount: acountReducer }
);
export default reducers