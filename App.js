/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



 import React from 'react';
 import {
   StyleSheet,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack=createNativeStackNavigator();
 import login from './src/components/login/login';
 import register from './src/components/register/register';



function App() {
    return (
      <NavigationContainer >
 <Stack.Navigator initialRouteName={"LOGIN"}  >
     <Stack.Group>
     <Stack.Screen name="LOGIN" component={login} options={{ headerShown:false}}/>
        <Stack.Screen name={"REGISTER"}   component={register} />
     </Stack.Group>
     </Stack.Navigator>
     </NavigationContainer>
    );
  
};




export default App