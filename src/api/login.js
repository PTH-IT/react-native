import axios from "axios";
import { useState } from "react";
import { connect } from 'react-redux';
import {changeResponse} from '../../storeredux/action/api';

import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../../storeredux/action/api';



 export default function LoginAPI(username, password)  {
  return dispatch => {
    dispatch(fetchProductsPending());

    const baseUrl = "https://apigolang-production.up.railway.app"
     axios({
        method: 'post',
        url: `${baseUrl}/login`,
        headers:{"Content-Type":"application/json"},
        data:{"UserID": username,"Password": password}
      }).then((response) => {
        dispatch(fetchProductsError(null));
        dispatch(fetchProductsSuccess(response.data));
            // return response.data;
      }).catch((error)=>{
        dispatch(fetchProductsSuccess(null));
        dispatch(fetchProductsError(error.response.data));
      });

    }
}
