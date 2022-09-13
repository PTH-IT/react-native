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
 import Login from './src/components/login/login';
 import Register from './src/components/register/register';
 import TabNavigator from './src/components/tabs/tab';
 import {getaccount } from './src/database/mongodb/database'




function App() {
  
    return (
      <NavigationContainer >
 <Stack.Navigator initialRouteName={"LOGIN"}  >
     <Stack.Group>
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




export default App