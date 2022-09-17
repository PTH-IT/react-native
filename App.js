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



function App(props) {

  let {Logging,changelogging}=props
  React.useEffect( () => {
   
    (async() => {const awesome_value = await AsyncStorage.getItem('account')
    if (awesome_value != null ){
      changelogging('TAB')
    }else {
      changelogging('LOGIN')
    }
    console.log(awesome_value)} 
    
    ) ();
    
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
});


export default connect(mapStateToProps, mapDispatchToProps)(App)