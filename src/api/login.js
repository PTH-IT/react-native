import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

import {LoginPending, LoginSuccess, LoginError} from '../../storeredux/action/login';



 export default function LoginAPI(username, password)  {
  return dispatch => {
    dispatch(LoginPending());

    // const baseUrl = "https://apigolang-production.up.railway.app"
    const baseUrl = "https://apigolang-production.up.railway.app"
    var body = {"UserID": username,"Password": password}
     axios({
        method: 'post',
        url: `${baseUrl}/login`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Content-Length':'1000',
          'Host': 'localhost',
        },
        data:body
      }).then(response => {
        // console.log(response)
        dispatch(LoginSuccess(response.data,response.status));
      }).catch(error=>{
        console.log(error.response)
        dispatch(LoginError(error.response.data,error.response.status));
      });

    }
}
