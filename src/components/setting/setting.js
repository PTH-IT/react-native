import {View,Text,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import  Ionicons   from  'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {changeCount} from '../../../storeredux/action/acount';






function Setting(props) {
  let {changeCount, Acount } = props;


  const logoutHandler = () => {
    (async() => {
      await AsyncStorage.removeItem('account')
    }) ();
    changeCount({PassWord: '', UserName: ''})
    props.navigation.navigate('LOGIN');
  }
  return <View  style={style.container}>
     
     <View style={style.viewchileren} onTouchEnd={logoutHandler}>
     <Ionicons  name='md-options-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  /> 
      <Text style={{fontSize:20}}>đăng xuất</Text>
     </View>
      
      
   
  </View>;
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  changeCount: data => {
    dispatch(changeCount(data));
  },
});
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