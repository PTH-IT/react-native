import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_ERROR} from '@Constants/constants';

export function LoginPending() {
  return {
      type: LOGIN_PENDING
  }
}

export function LoginSuccess(response,statuscode) {
  return {
      type: LOGIN_SUCCESS,
      response: response,
      statuscode: statuscode
  }
}

export function LoginError(error,statuscode) {
  return {
      type: LOGIN_ERROR,
      error: error,
      statuscode: statuscode
  }
}
