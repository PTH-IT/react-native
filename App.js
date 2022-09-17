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
import Default from './src/components/default/default';

import Login from './src/components/login/login';
import Register from './src/components/register/register';
import TabNavigator from './src/components/tabs/tab';
import { getaccount } from './src/database/mongodb/database'
import { connect } from 'react-redux';
import { changeLogging } from './storeredux/action/loging';
import { changeLanguages } from './storeredux/action/languages';
import { changeCount } from './storeredux/action/acount';
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

  let { Logging, changelogging, LanGuages, changeLanguages } = props
  React.useEffect(() => {

    //     const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    (
      async () => {
       
        OneSignal.setLogLevel(6, 0)
        OneSignal.setAppId('ebe89988-f3e2-40b2-959c-8079eabc32b7');
        
        OneSignal.setNotificationOpenedHandler(notification => {
          console.log("OneSignal: notification opened:", notification);
        })
      })();

    (
      async () => {
       
        OneSignal.setLogLevel(6, 0)
        OneSignal.setAppId('ebe89988-f3e2-40b2-959c-8079eabc32b7');
        
        OneSignal.setNotificationOpenedHandler(notification => {
          console.log("OneSignal: notification opened:", notification);
        })
        //get account from Storage
        const accountStorage = await AsyncStorage.getItem('account')
        if (accountStorage != null) {
          changelogging('TAB')
        } else {
          changelogging('LOGIN')
        }

        //get language from Storage
        const languageStorage = await AsyncStorage.getItem('language')
        if (languageStorage != null) {
          changeLanguages(languageStorage)
        }

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
});


export default connect(mapStateToProps, mapDispatchToProps)(App)