import React from "react";
import {
   StyleSheet,
    View, Text, Image,
    ImageBackground, TextInput,
    TouchableHighlight, Platform, ActivityIndicator
} from "react-native";
import Loading from '../loading/loading';
import {getRegisterError, getRegister, getRegisterPending}  from  '@reduxreducers/registerReducer'
import {getAccount}  from  '@reduxreducers/accountReducer'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {changeCount} from '@reduxaction/acount';
import RegisterAPI from '../../api/register'
import { useEffect } from "react";

 function Register(props){
  console.log(props)
  const {Account,Register,RegisterAction,AccountAction} = props;
    const [errorName, seterrorName] = React.useState('');
    const [errorUserName, setErrorUserName] = React.useState('');
    const [errorEmail, seterrorEmail] = React.useState('');
  const [errorPassWord, setErrorPassWord] = React.useState('');
  const [errorConformPassWord, seterrorConformPassWord] = React.useState('');
  const resetState = event =>{
    seterrorName('')
    setErrorUserName('')
    seterrorEmail('')
    setErrorPassWord('')
    seterrorConformPassWord('')
  }
  const handleName = event => {
    AccountAction({Name: event, UserName: Account.UserName,Email: Account.Email,PassWord: Account.PassWord,ConfirmPassWord: Account.ConfirmPassWord});
  };
  const handleUserName = event => {
    AccountAction({Name: Account.Name, UserName: event,Email: Account.Email,PassWord: Account.PassWord,ConfirmPassWord: Account.ConfirmPassWord});
  };
  const handleEmail = event => {
    AccountAction({Name: Account.Name, UserName: Account.UserName,Email: event,PassWord: Account.PassWord,ConfirmPassWord: Account.ConfirmPassWord,});
  };
  const handlePassWord = event => {
    AccountAction({Name: Account.Name, UserName: Account.UserName,Email: Account.Email,PassWord: event,ConfirmPassWord: Account.ConfirmPassWord});
  };
  const handleConfirmPassWord = event => {
    seterrorConformPassWord('')
    AccountAction({Name: Account.Name, UserName: Account.UserName,Email: Account.Email,PassWord: Account.PassWord,ConfirmPassWord: event});
  };
  const checkConfirmPassWord = event => {
    if (Account.ConfirmPassWord != Account.PassWord){
      seterrorConformPassWord("confirm password is  wrong")
    }
  };
  const handelRegister = event => {
    if (  Account.Name.length == 0 ){
      seterrorName("please enter name")

    }
    else if ( Account.UserName.length == 0 ){
      setErrorUserName("please enter username")

    } 
    else if ( Account.Email.length == 0 ){
      seterrorEmail("please enter email address")
    }
    else if ( Account.PassWord.length == 0 ){
      setErrorPassWord("please enter password")
    }
    else if (  Account.ConfirmPassWord != Account.PassWord){
      seterrorConformPassWord("confirm password is  wrong")
    }
    else {
      RegisterAction(Account.UserName, Account.PassWord, Account.Email,)
    }
  }

  useEffect(() => {
    if (Register.response != null){
      props.navigation.navigate('LOGIN');
    }else if (Register.error != null){
      Register.error.forEach( (element,index) => {
        if (element.type == "username"){
          setErrorUserName("username is exist")
        }
        if (element.type == "email"){
          seterrorEmail("email is exist")
        }
        
      });
    }

  },[Register.pending,Register.response]);
  
    return (
        <ImageBackground source={{uri:'https://i.pinimg.com/564x/fa/b2/46/fab246d26cf67ab98164191e9ead0344.jpg'}}  style={styleregister.container}>
 <Loading display={Register.pending ?"flex":"none"}/>
        <View style={styleregister.containerlogin}>

            <View style={styleregister.containerregit}>
                <View style={styleregister.containerinput}>

                <Text style={styleregister.textlabel} >Name</Text>
                    <TextInput   placeholder={"name"} placeholderTextColor={"white"} style={styleregister.textinput}  onChangeText={handleName}/>
                    <Text
              style={[
                styleregister.texterror,
                {display: errorName.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorName}
            </Text>
            <Text style={styleregister.textlabel} >User name</Text>
                    <TextInput    placeholder={"User name"} placeholderTextColor={"white"} style={styleregister.textinput} onChangeText={handleUserName}/>
                    <Text
              style={[
                styleregister.texterror,
                {display: errorUserName.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorUserName}
            </Text>

                    <Text style={styleregister.textlabel} >Email</Text>
                    <TextInput    placeholder={"Email"} placeholderTextColor={"white"} style={styleregister.textinput} onChangeText={handleEmail}/>
                    <Text
              style={[
                styleregister.texterror,
                {display: errorEmail.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorEmail}
            </Text>

                    <Text style={styleregister.textlabel} >Password</Text>
                    <TextInput  placeholder={"Password"} placeholderTextColor={"white"} style={styleregister.textinput} secureTextEntry={true} onChangeText={handlePassWord}/>
                    <Text
              style={[
                styleregister.texterror,
                {display: errorPassWord.length > 0 ? 'flex' : 'none'},
              ]}>
              {errorPassWord}
            </Text>

                    <Text style={styleregister.textlabel} >Confirm Password</Text>
                    <TextInput  placeholder={"Confirm Password"} placeholderTextColor={"white"} style={styleregister.textinput} secureTextEntry={true} onChangeText={handleConfirmPassWord} onBlur={checkConfirmPassWord}/>
                    <Text
              style={[
                styleregister.texterror,
                {display: errorConformPassWord.length > 0 ? 'flex' : 'none'},
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
const mapStateToProps = state =>({
  Account:getAccount(state),
  Register:{
    error: getRegisterError(state),
    response: getRegister(state),
    pending: getRegisterPending(state)
    }
})
const mapDispatchToProps = dispatch => bindActionCreators({
  RegisterAction : RegisterAPI,
  AccountAction: changeCount
  
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styleregister=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:null,
        height:null,
        resizeMode:"center",
        

    },
    containerlogin:{
        backgroundColor:"rgba(0,0,0,0.5)",
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
    },
    containerlogo:{
        flex:1,
        resizeMode:"contain"

    },
    containerregit:{
        flex:2,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },

    containerinput:{
        flex: 2,
        padding:20
    },
    textinput:{
        padding:15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 10,
    borderRadius: 4,
    color: 'white',
    width: '100%',
        
    },
    textlabel:{
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
    bottom:{
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
    
    
});