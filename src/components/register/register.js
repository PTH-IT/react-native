import React from "react";
import {
  StyleSheet,
  View, Text, Image,
  ImageBackground, TextInput,
  TouchableHighlight, Platform, ActivityIndicator
} from "react-native";
import Loading from 'components/loading/loading';

import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { changeregister, registerTaskAsync } from 'features/acountslice';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
export default function Register(props) {
  const account = useSelector((state) => state.Account.register)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [errorName, seterrorName] = React.useState('');
  const [errorUserName, setErrorUserName] = React.useState('');
  const [errorEmail, seterrorEmail] = React.useState('');
  const [errorPassWord, setErrorPassWord] = React.useState('');
  const [errorConformPassWord, seterrorConformPassWord] = React.useState('');
  const resetState = event => {
    seterrorName('')
    setErrorUserName('')
    seterrorEmail('')
    setErrorPassWord('')
    seterrorConformPassWord('')
  }
  const handleName = event => {
    dispatch(changeregister({ Name: event, UserName: account.UserName, Email: account.Email, PassWord: account.PassWord, ConfirmPassWord: account.ConfirmPassWord }));
  };
  const handleUserName = event => {
    dispatch(changeregister({ Name: account.Name, UserName: event, Email: account.Email, PassWord: account.PassWord, ConfirmPassWord: account.ConfirmPassWord }));
  };
  const handleEmail = event => {
    dispatch(changeregister({ Name: account.Name, UserName: account.UserName, Email: event, PassWord: account.PassWord, ConfirmPassWord: account.ConfirmPassWord, }));
  };
  const handlePassWord = event => {
    dispatch(changeregister({ Name: account.Name, UserName: account.UserName, Email: account.Email, PassWord: event, ConfirmPassWord: account.ConfirmPassWord }));
  };
  const handleConfirmPassWord = event => {
    seterrorConformPassWord('')
    dispatch(changeregister({ Name: account.Name, UserName: account.UserName, Email: account.Email, PassWord: account.PassWord, ConfirmPassWord: event }));
  };
  const checkConfirmPassWord = event => {
    if (account.ConfirmPassWord != account.PassWord) {
      seterrorConformPassWord("confirm password is  wrong")
    }
  };
  const handelRegister = event => {
    if (account.Name.length == 0) {
      seterrorName("please enter name")

    }
    else if (account.UserName.length == 0) {
      setErrorUserName("please enter username")

    }
    else if (account.Email.length == 0) {
      seterrorEmail("please enter email address")
    }
    else if (account.PassWord.length == 0) {
      setErrorPassWord("please enter password")
    }
    else if (account.ConfirmPassWord != account.PassWord) {
      seterrorConformPassWord("confirm password is  wrong")
    }
    else {
      resetState()
      dispatch(registerTaskAsync({ "UserName": account.UserName, "PassWord": account.PassWord, "Email": account.Email }))
    }
  }

  useEffect(() => {
    if (account.api.response != null) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'LOGIN', },
          ],
        })
      )
    } else if (account.api.error != null) {
      account.api.error.forEach((element, index) => {
        if (element.type == "username") {
          setErrorUserName("username is exist")
        }
        if (element.type == "email") {
          seterrorEmail("email is exist")
        }

      });
    }

  }, [account.api.pending, account.api.response]);

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/fa/b2/46/fab246d26cf67ab98164191e9ead0344.jpg' }} style={styleregister.container}>
      <Loading display={account.api.pending ? "flex" : "none"} />
      <View style={styleregister.containerlogin}>

        <View style={styleregister.containerregit}>
          <View style={styleregister.containerinput}>

            <Text style={styleregister.textlabel} >Name</Text>
            <TextInput placeholder={"name"} placeholderTextColor={"white"} style={styleregister.textinput} onChangeText={handleName} />
            <Text
              style={[
                styleregister.texterror,
                { display: errorName.length > 0 ? 'flex' : 'none' },
              ]}>
              {errorName}
            </Text>
            <Text style={styleregister.textlabel} >User name</Text>
            <TextInput placeholder={"User name"} placeholderTextColor={"white"} style={styleregister.textinput} onChangeText={handleUserName} />
            <Text
              style={[
                styleregister.texterror,
                { display: errorUserName.length > 0 ? 'flex' : 'none' },
              ]}>
              {errorUserName}
            </Text>

            <Text style={styleregister.textlabel} >Email</Text>
            <TextInput placeholder={"Email"} placeholderTextColor={"white"} style={styleregister.textinput} onChangeText={handleEmail} />
            <Text
              style={[
                styleregister.texterror,
                { display: errorEmail.length > 0 ? 'flex' : 'none' },
              ]}>
              {errorEmail}
            </Text>

            <Text style={styleregister.textlabel} >Password</Text>
            <TextInput placeholder={"Password"} placeholderTextColor={"white"} style={styleregister.textinput} secureTextEntry={true} onChangeText={handlePassWord} />
            <Text
              style={[
                styleregister.texterror,
                { display: errorPassWord.length > 0 ? 'flex' : 'none' },
              ]}>
              {errorPassWord}
            </Text>

            <Text style={styleregister.textlabel} >Confirm Password</Text>
            <TextInput placeholder={"Confirm Password"} placeholderTextColor={"white"} style={styleregister.textinput} secureTextEntry={true} onChangeText={handleConfirmPassWord} onBlur={checkConfirmPassWord} />
            <Text
              style={[
                styleregister.texterror,
                { display: errorConformPassWord.length > 0 ? 'flex' : 'none' },
              ]}>
              {errorConformPassWord}
            </Text>
            <Text style={styleregister.bottom} onPress={handelRegister}>REGISTER</Text>

          </View>


        </View>
      </View>
    </ImageBackground>
  );
}


const styleregister = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
    resizeMode: "center",


  },
  containerlogin: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  containerlogo: {
    flex: 1,
    resizeMode: "contain"

  },
  containerregit: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerinput: {
    flex: 2,
    padding: 20
  },
  textinput: {
    padding: 15,
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
  bottom: {
    width: 150,
    fontStyle: 'italic',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',

  },


});