import {LOGOUT_PENDING,LOGOUT_SUCCESS,LOGOUT_ERROR} from 'constants/constants'


export function LogoutPending() {
    return {
        type: LOGOUT_PENDING
    }
  }
  
  export function LogoutSuccess(response,statuscode) {
    return {
        type: LOGOUT_SUCCESS,
        response: response,
        statuscode: statuscode
    }
  }
  
  export function LogoutError(error,statuscode) {
    return {
        type: LOGOUT_ERROR,
        error: error,
        statuscode: statuscode
    }
  }