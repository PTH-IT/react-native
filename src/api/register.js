import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';
import {changeResponse} from '../../storeredux/action/login';

import {RegisterPending, RegisterSuccess, RegisterError} from '../../storeredux/action/register';



 export default function RegisterAPI(username, password)  {
  return dispatch => {
    dispatch(RegisterPending());

    const baseUrl = "https://apigolang-production.up.railway.app"
     axios({
        method: 'post',
        url: `${baseUrl}/register`,
        headers:{"Content-Type":"application/json"},
        data:{
        "UserID": username,
        "Password": password
      }
      }).then((response) => {
        dispatch(RegisterError(null));
        dispatch(RegisterSuccess(response.data));
            // return response.data;
      }).catch((error)=>{
        dispatch(RegisterSuccess(null));
        dispatch(RegisterError(error.response.data));
      });

    }
}
