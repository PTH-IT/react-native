import axios from "axios";
import {baseUrl} from 'config/config'


 export   function LoginAPI(UserName,PassWord)  {
    var body = {"UserID": UserName,"Password": PassWord}
    return axios({
        method: 'post',
        url: `${baseUrl}/login`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Content-Length': JSON.stringify(body).length.toString(),
        },
        data:body
      })

    
}

export  function RegisterAPI(username, password,email)  {


    var body = {
      "UserID": username,
      "Password": password,
      "email": email
    }
    return axios({
        method: 'post',
        url: `${baseUrl}/register`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Content-Length': JSON.stringify(body).length.toString(),
        },
        data:body
      })

}


export  function LogoutAPI(Authorization)  {

    return axios({
        method: 'post',
        url: `${baseUrl}/logout`,
        headers:{
          'accept': 'application/json',
          'Content-Type':'application/json',
          'Authorization': Authorization,
        }
      })

}