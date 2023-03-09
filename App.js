/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Default from 'components/default/default';

import Login from 'components/login/login';
import Register from 'components/register/register';
import TabNavigator from 'components/tabs/tab';
import { connect } from 'react-redux';
import { changeLogging } from 'action/loging';
import { changeLanguages } from 'action/languages';
import { changeCount } from 'action/acount';
import { TokenChange} from 'action/token';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import pushNotification from './src/pushnotification/index'
const firebaseConfig = {
  apiKey: "AIzaSyAHy_ZWz_7EOufoJvWlD6u8_FENstrEKzc",
  authDomain: "pth-it.firebaseapp.com",
  projectId: "pth-it",
  storageBucket: "pth-it.appspot.com",
  messagingSenderId: "330170459745",
  appId: "1:330170459745:web:daef4e7c2c8a76267e6c20",
  measurementId: "G-MN5X4SVGKM"
};

import OneSignal from 'react-native-onesignal';




function App(props) {

  let { Logging, changelogging, LanGuages, changeLanguages ,changeToken} = props
  React.useEffect(() => {

     

    (
      async () => {
       
        await AsyncStorage.getItem('language').then((data) => {
          if (data != null) {
            changeLanguages("en")
          }
        })
       
        //get account from Storage
        await AsyncStorage.getItem('token').then((token) => {
          if (token != null) {
            jsontoken = JSON.parse(token)
            changeToken(jsontoken.Authorization,jsontoken.type)
            changelogging('TAB')
          } else {
            changelogging('LOGIN')
          }
        })
      })();
  }, [1]);

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName={"DEFAULT"}  >
        <Stack.Group>
          <Stack.Screen name="DEFAULT" component={Default} options={{ headerShown: false }} />
          <Stack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={"REGISTER"} component={Register} />


        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={"TAB"} options={{ headerShown: false }} component={TabNavigator} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );

};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  changeCount: data => {
    dispatch(changeCount(data));
  },
  changelogging: data => {
    dispatch(changeLogging(data));
  },
  changeLanguages: data => {
    dispatch(changeLanguages(data));
  },
  changeToken: (token,option) => {
    dispatch(TokenChange(token,option));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App)