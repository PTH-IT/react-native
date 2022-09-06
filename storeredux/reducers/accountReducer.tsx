import { COUNTER_CHANGE } from '../constants/acount';
const initialState = {
UserName: "",
PassWord: ""
};
const acountReducer = (state = initialState, action) => {
   console.log(action)
switch(action.type) {
case COUNTER_CHANGE:
return {
...state,
action:action.payload
};
default:
return state;
}
}
export default acountReducer;