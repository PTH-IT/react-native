import {LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_ERROR} from '@Constants/constants';

export function LoginPending() {
  return {
      type: LOGIN_PENDING
  }
}

export function LoginSuccess(response) {
  return {
      type: LOGIN_SUCCESS,
      response: response
  }
}

export function LoginError(error) {
  return {
      type: LOGIN_ERROR,
      error: error
  }
}
