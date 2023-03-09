import {View,Text,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import  Ionicons   from  'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {changeCount} from 'action/acount';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAccount}  from  'reduxreducers/accountReducer'
import {getToken}  from  'reduxreducers/tokenReducer'
import {bindActionCreators} from 'redux'
import {MessageWeb} from 'API/socket'




function  Setting(props) {
  let {AccountAction, Acount ,Token} = props;
 useEffect(() =>{
  (async() => {
    await MessageWeb(Token)
    
  }) ();
 },[1])
  
 
  const logoutHandler = () => {
    (async() => {
      await AsyncStorage.removeItem('token')
    }) ();
    AccountAction({PassWord: '', UserName: ''})
    props.navigation.navigate('LOGIN');
  }
  return <View  style={style.container}>
     
     <View style={style.viewchileren} onTouchEnd={logoutHandler}>
     <Ionicons  name='md-options-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  /> 
      <Text style={{fontSize:20}}>đăng xuất</Text>
     </View>
      
      
   
  </View>;
}

const mapStateToProps = state => ({
  Token:getToken(state),
  Acount: getAccount(state),
  
})
const mapDispatchToProps = dispatch => bindActionCreators({
  AccountAction: changeCount,
  
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Setting);

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