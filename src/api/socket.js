import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from "socket.io-client";
export default function MessageChannel(){
    const accountStorage =  AsyncStorage.getItem('token')
    if (accountStorage != null) {
      console.log(accountStorage)
    const baseUrl = "apigolang-production.up.railway.app"

      const socket = new WebSocket(
        `ws://${baseUrl}/message?token=` +
          accountStorage["Authorization"]
      );

      socket.addEventListener('open', () => {
        // send a message to the server
        socket.send(
          JSON.stringify({
            type: 'hello from client',
            receiver: 'haupham',
            sender: 'haupham',
            detail: 'hauasdsd',
          }),
        );
      });

      // receive a message from the server
      socket.addEventListener('message', ({data}) => {
        console.log(data);
      });


    }


}