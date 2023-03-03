import {REGISTER_PENDING,REGISTER_SUCCESS,REGISTER_ERROR} from '@Constants/constants';

export function RegisterPending() {
  return {
      type: REGISTER_PENDING
  }
}

export function RegisterSuccess(response) {
  return {
      type: REGISTER_SUCCESS,
      response: response
  }
}

export function RegisterError(error) {
  return {
      type: REGISTER_ERROR,
      error: error
  }
}
