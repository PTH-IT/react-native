import {View,Text,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import  Ionicons   from  'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';

export default  function  Setting(props) {
  const navigation = useNavigation();
 useEffect(() =>{
  (async() => {
    // await MessageWeb(Token)
    
  }) ();
 },[1])
  
 
  const logoutHandler = () => {
    (async() => {
      await AsyncStorage.removeItem('token')
    }) ();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'LOGIN', },
        ],
      })
    )
  }
  return <View  style={style.container}>
     
     <View style={style.viewchileren} onTouchEnd={logoutHandler}>
     <Ionicons  name='md-options-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  /> 
      <Text style={{fontSize:20}}>đăng xuất</Text>
     </View>
      
      
   
  </View>;
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    padding: 10,
  },
  viewchileren:{
    padding:5,
    borderRadius:5,
    backgroundColor: 'white', 
    flexDirection:'row'

  }
})