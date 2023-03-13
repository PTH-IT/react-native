import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import  Ionicons   from  'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import {logoutTaskAsync} from 'features/acountslice'
import { useDispatch,useSelector } from 'react-redux';
import Loading from 'components/loading/loading';

export default  function  Setting(props) {
  const dispatch =  useDispatch()
  const authorization = useSelector((state) => state.Account.token)
  console.log(authorization)
  const logout = useSelector((state) => state.Account.logout)
  const navigation = useNavigation();
 useEffect(() =>{
  console.log(logout.api)
  
  // if ( logout.api.error != null && logout.api.statuscode != 200){
  
  if ( logout.api.error == null && logout.api.statuscode == 200){
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
  }else  if (logout.api.error  != null){
    alert(logout.api.error)
  }
 

 },[logout.api.response,logout.api.error])
  
 
  const logoutHandler = () => {
    dispatch(logoutTaskAsync(authorization.token))
    
  }
  
  return <View  style={style.container}>
      <Loading display={logout.api.pending ? "flex" : "none"} />
     <TouchableOpacity  style={style.viewchileren} onPress={logoutHandler}>
     <Ionicons  name='md-options-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  /> 
      <Text style={{fontSize:20}}>đăng xuất</Text>
     </TouchableOpacity>
      
      
   
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