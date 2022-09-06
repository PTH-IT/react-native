import { COUNTER_CHANGE } from '../constants/acount';
type VariableAccount = {
    UserName: String,
    PassWord: String,
}
export function changeCount(Account: VariableAccount) {
return {
type: COUNTER_CHANGE,
payload: Account
}
}