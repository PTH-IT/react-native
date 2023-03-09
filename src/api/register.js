import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

import {RegisterPending, RegisterSuccess, RegisterError} from '../../storeredux/action/register';
import {baseUrl} from 'config/config'


 export default function RegisterAPI(username, password,email)  {
  return dispatch => {
    dispatch(RegisterPending());
    var body = {
      "UserID": username,
      "Password": password,
      "email": email
    }
     axios({
        method: 'post',
        url: `${baseUrl}/register`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Content-Length': JSON.stringify(body).length.toString(),
        },
        data:body
      }).then((response) => {
      
        dispatch(RegisterSuccess(response.data ,response.status));
      }).catch((error)=>{
        dispatch(RegisterError(error.response.data,error.response.status));
      });

    }
}
