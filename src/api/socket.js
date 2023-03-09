import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from "socket.io-client";
import {baseUrlSocket} from 'config/config'
 export  function MessageWeb(token) {  
  var  socket = new WebSocket(`wss://${baseUrlSocket}/socketmessage?token=`+token);
  socket.onopen = function (event) {
    socket.send(
      JSON.stringify({
        type: 'hello from client',
        receiver: 'haupham',
        sender: 'haupham',
        detail: 'hauasdsd'
      }))
  }
  socket.onmessage = function (evt) {
    console.log(evt.data)
  };
}  
 

