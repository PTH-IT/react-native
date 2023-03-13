import {StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from 'components/loading/loading';
import React ,{ useEffect } from 'react';
import {changelogin,loginTaskAsync,changetoken} from 'features/acountslice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';



export default function Login(props) {
  const account = useSelector((state) => state.Account.login)
  const dispatch = useDispatch();
  const [errorUserName, setErrorUserName] = React.useState('');
  const [errorPassWord, setErrorPassWord] = React.useState('');
  const navigation = useNavigation();
  const register = () => {
    navigation.dispatch(
      CommonActions.navigate({name: 'REGISTER'})
    )
  };
  
  useEffect(() => {
    if (account.api.response != null && account.api.statuscode == 200 ){
      dispatch(changetoken({"token":account.api.response.Authorization,"tokentype":account.api.response.type}))
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'TAB', },
          ],
        })
      )

      AsyncStorage.setItem('token',JSON.stringify(account.api.response))
      
    }else if (account.api.error  != null && account.api.statuscode == 403){
      if (account.api.error["message"] != undefined) {
      setErrorPassWord(account.api.error["message"])
      }

    }
    console.log(account)
  },[account.api.response,account.api.error]);
  const handleUserName = event => {
    dispatch(changelogin({PassWord: account.PassWord, UserName: event}));
   
  };
  const handlePassWord = event => {
    dispatch(changelogin({PassWord: event, UserName: account.UserName}));
 
  };
  const   handleLogin =  event =>  {
    setErrorUserName('');
    setErrorPassWord('');
    if (account.UserName.length == 0 && account.PassWord.length == 0) {
      setErrorUserName('vui long nhap username');
      setErrorPassWord('vui long nhap Password');
    } else if (account.UserName.length == 0) {
      setErrorUserName('vui long nhap username');
    } else if (account.PassWord.length == 0) {
      setErrorPassWord('vui long nhap Password');
    } else {
      dispatch(loginTaskAsync({"UserName":account.UserName,"PassWord":account.PassWord}))
    }
  };

  return (
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/fa/b2/46/fab246d26cf67ab98164191e9ead0344.jpg'}} style={stylelogin.container}>
      <Loading display={account.api.pending ?"flex":"none"}/>
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
