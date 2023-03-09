import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

import {LoginPending, LoginSuccess, LoginError} from 'action/login';
import {baseUrl} from 'config/config'


 export default function LoginAPI(username, password)  {
  return dispatch => {
    dispatch(LoginPending());
    var body = {"UserID": username,"Password": password}
     axios({
        method: 'post',
        url: `${baseUrl}/login`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Content-Length': JSON.stringify(body).length.toString(),
        },
        data:body
      }).then(response => {
        dispatch(LoginSuccess(response.data,response.status));
      }).catch(error=>{
        dispatch(LoginError(error.response.data,error.response.status));
      });

    }
}
