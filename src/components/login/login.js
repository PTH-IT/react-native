import {StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect, createDispatchHook} from 'react-redux';
import {changeCount} from '@reduxaction/acount';
import Loading from '../loading/loading';
import React ,{ useEffect } from 'react';
import LoginAPI from '../../api/login'
import { bindActionCreators } from 'redux';
import {getLoginError, getLogin, getLoginPending}  from  '@reduxreducers/loginReducer'
import {getAccount}  from  '@reduxreducers/accountReducer'
import {LoginPending, LoginSuccess, LoginError} from '@reduxaction/login';

function Login(props) {
  let {AccountAction, Account ,ApiAction,API} = props;
  const [errorUserName, setErrorUserName] = React.useState('');
  const [errorPassWord, setErrorPassWord] = React.useState('');

 
  const register = () => {
    
    props.navigation.navigate('REGISTER');
  };
  
  useEffect(() => {
    if (API.response != null){
      AsyncStorage.setItem('token',JSON.stringify(API.response))
      props.navigation.navigate('TAB');
    }
  },[API.pending,API.response]);
  const handleUserName = event => {
    AccountAction({PassWord: Account.PassWord, UserName: event});
  };
  const handlePassWord = event => {
    AccountAction({PassWord: event, UserName: Account.UserName});
  };
  const   handleLogin =  () =>  {
    setErrorUserName('');
    setErrorPassWord('');

    if (Account.UserName.length == 0) {
      setErrorUserName('vui long nhap username');
      setErrorPassWord('vui long nhap Password');
    } else if (Account.UserName.length == 0) {
      setErrorUserName('vui long nhap username');
    } else if (Account.PassWord.length == 0) {
      setErrorPassWord('vui long nhap Password');
    } else {
      ApiAction(Account.UserName,Account.PassWord)
      // AsyncStorage.setItem('account',JSON.stringify(Acount))
      // props.navigation.navigate('TAB');
     
    }
  };

  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/fa/b2/46/fab246d26cf67ab98164191e9ead0344.jpg'}} style={stylelogin.container}>
      <Loading display={API.pending ?"flex":"none"}/>
      <View style={stylelogin.containerlogin}>
        <View style={stylelogin.containerregit}>
          <View style={stylelogin.containerinput}>
            <Text style={stylelogin.textlabel}>Username</Text>
            <TextInput
              placeholder={'username'}
              placeholderTextColor={'white'}
              style={stylelogin.textinput}
              onChangeText={handleUserName}
            />
            <Text
              style={[
                stylelogin.texterror,
                {display: errorUserName.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorUserName}
            </Text>
            <Text style={stylelogin.textlabel}>Password</Text>
            <TextInput
              placeholder={'password'}
              placeholderTextColor={'white'}
              style={stylelogin.textinput}
              secureTextEntry={true}
              onChangeText={handlePassWord}
            />
            <Text
              style={[
                stylelogin.texterror,
                {display: errorPassWord.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorPassWord}
            </Text>
            <View>
            <Text style={stylelogin.bottomlogin} onPress={handleLogin}>LOGIN</Text>
            <Text
              style={stylelogin.bottomregit}
              onPress={register}>REGISTER</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const mapStateToProps = state => ({
  Account:getAccount(state),
  API:{error: getLoginError(state),
  response: getLogin(state),
  pending: getLoginPending(state)
  }
})
const mapDispatchToProps = dispatch => bindActionCreators({
  ApiAction : LoginAPI,
  AccountAction: changeCount
  
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const stylelogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  containerlogin: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerlogo: {
    flex: 1,
    resizeMode: 'contain',
  },
  containerregit: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerinput: {
    flex: 2,
    padding:20
  },
  textinput: {
    padding:15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 10,
    borderRadius: 4,
    color: 'white',
    width: '100%',
  },
  textlabel: {
    marginTop: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'white',
  },
  texterror: {
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'red',
  },
  bottomlogin: {
    width:150,
    fontStyle: 'italic',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  bottomregit: {
    width:150,
    fontStyle: 'italic',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});
