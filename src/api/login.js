import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';
import {changeResponse} from '../../storeredux/action/login';

import {LoginPending, LoginSuccess, LoginError} from '../../storeredux/action/login';



 export default function LoginAPI(username, password)  {
  return dispatch => {
    dispatch(LoginPending());

    const baseUrl = "https://apigolang-production.up.railway.app"
     axios({
        method: 'post',
        url: `${baseUrl}/login`,
        headers:{"Content-Type":"application/json"},
        data:{"UserID": username,"Password": password}
      }).then(response => {
        dispatch(LoginSuccess(response.data,response.status));
      }).catch(error=>{
        dispatch(LoginError(error.response.data,error.response.status));
      });

    }
}
