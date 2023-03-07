import {REGISTER_PENDING,REGISTER_SUCCESS,REGISTER_ERROR} from '@Constants/constants';

export function RegisterPending() {
  return {
      type: REGISTER_PENDING
  }
}

export function RegisterSuccess(response,statuscode) {
  return {
      type: REGISTER_SUCCESS,
      response: response,
      statuscode: statuscode
  }
}

export function RegisterError(error,statuscode) {
  return {
      type: REGISTER_ERROR,
      error: error,
      statuscode: statuscode
  }
}
