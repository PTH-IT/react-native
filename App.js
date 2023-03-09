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
import { useSelector, useDispatch } from 'react-redux';
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
import {changetoken} from 'features/acountslice';
import {changeLanguage,changeTab} from 'features/deviceslice';




export default function App(props) {
  const device = useSelector((state) => state.Device)
  const dispatch = useDispatch();
  React.useEffect(() => {

    (
      async () => {
       
        await AsyncStorage.getItem('language').then((data) => {
          if (data != null) {
            dispatch(changeLanguage(data))
          }
        })
       
        //get account from Storage
        await AsyncStorage.getItem('token').then((token) => {
          if (token != null) {
            jsontoken = JSON.parse(token)
            dispatch(changetoken({"token":jsontoken.Authorization,"tokentype":jsontoken.type}))
            dispatch(changeTab('TAB'))
          } else {
            dispatch(changeTab('LOGIN'))
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


