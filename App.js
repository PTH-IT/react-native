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
 const Stack=createNativeStackNavigator();
 import Default from './src/components/default/default';

 import Login from './src/components/login/login';
 import Register from './src/components/register/register';
 import TabNavigator from './src/components/tabs/tab';
 import {getaccount } from './src/database/mongodb/database'
 import {connect} from 'react-redux';
 import {changeLogging} from './storeredux/action/loging';
 import {changeLanguages} from './storeredux/action/languages';




function App(props) {

  let {Logging,changelogging,LanGuages,changeLanguages}=props
  React.useEffect( () => {
   
    (
      async() => {
      const accountStorage = await AsyncStorage.getItem('account')
    if (accountStorage != null ){
      changelogging('TAB')
    }else {
      changelogging('LOGIN')
    }

   }) ();

   (
    async() => {
    const languageStorage = await AsyncStorage.getItem('language')
  if (languageStorage != null ){
    changeLanguages(languageStorage)
  }

 }) ();



    
  }, [1]);
 
    return (
     
      <NavigationContainer >
 <Stack.Navigator initialRouteName={"DEFAULT"}  >
     <Stack.Group>
     <Stack.Screen name="DEFAULT" component={Default} options={{ headerShown:false}}/>
     <Stack.Screen name="LOGIN" component={Login} options={{ headerShown:false}}/>
    <Stack.Screen name={"REGISTER"}   component={Register} />
      

     </Stack.Group>
     <Stack.Group>
     <Stack.Screen name={"TAB"} options={{headerShown:false}}  component={TabNavigator} />
     </Stack.Group>
     </Stack.Navigator>
     </NavigationContainer>

    );
  
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  changelogging: data => {
    dispatch(changeLogging(data));
  },
  changeLanguages: data => {
    dispatch(changeLanguages(data));
  },
  cha
});


export default connect(mapStateToProps, mapDispatchToProps)(App)