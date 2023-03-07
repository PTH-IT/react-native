import {MOBILE_CHANGE} from '@Constants/constants';


export function ChangeMobile(width,heidth) {
    return {
        type: MOBILE_CHANGE,
        width: width,
        heidth: heidth
    }
  }
