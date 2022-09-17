import {StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {changeCount} from '../../../storeredux/action/acount';
import Loading from '../loading/loading';
import React from 'react';

function Login(props) {
  let {changeCount, Acount ,Logging} = props;
  const [errorUserName, setErrorUserName] = React.useState('');
  const [errorPassWord, setErrorPassWord] = React.useState('');
  

 
  const register = () => {
    (async() => {
      await AsyncStorage.removeItem('account')
    }) ();
    props.navigation.navigate('REGISTER');
  };

  const handleUserName = event => {
    changeCount({PassWord: Acount.PassWord, UserName: event});
  };
  const handlePassWord = event => {
    changeCount({PassWord: event, UserName: Acount.UserName});
  };
  const handleLogin = () => {
    setErrorUserName('');
    setErrorPassWord('');

    if (Acount.UserName.length == 0) {
      setErrorUserName('vui long nhap username');
      setErrorPassWord('vui long nhap Password');
    } else if (Acount.UserName.length == 0) {
      setErrorUserName('vui long nhap username');
    } else if (Acount.PassWord.length == 0) {
      setErrorPassWord('vui long nhap Password');
    } else {
      AsyncStorage.setItem('account',JSON.stringify(Acount))
      props.navigation.navigate('TAB');
     
    }
  };

  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/fa/b2/46/fab246d26cf67ab98164191e9ead0344.jpg'}} style={stylelogin.container}>
      <Loading />
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
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  changeCount: data => {
    dispatch(changeCount(data));
  },
});
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
