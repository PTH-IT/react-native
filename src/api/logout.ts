import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';

import {LogoutPending, LogoutSuccess, LogoutError} from 'action/logout';
import {baseUrl} from 'config/config'


 export default function LogoutAPI(token)  {
  return dispatch => {
    dispatch(LogoutPending());
     axios({
        method: 'get',
        url: `${baseUrl}/login`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Authorization':token 
        },
      }).then(response => {
        dispatch(LogoutSuccess(response.data,response.status));
      }).catch(error=>{
        dispatch(LogoutError(error.response.data,error.response.status));
      });

    }
}
