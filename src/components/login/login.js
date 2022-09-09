import {StyleSheet, View, Text, ImageBackground, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from '../../../storeredux/action/acount';
import Loading from '../loading/loading';
import React ,{useState} from 'react';
function login(props) {
  let {changeCount, Acount} = props
  const [errorUserName, setErrorUserName] = useState('')
  const [errorPassWord, setErrorPassWord] = useState('')

  const register = () => {
    this.props.navigation.navigate('REGISTER')
  };

  const handleUserName = event => {
    changeCount({PassWord: Acount['PassWord'], UserName: event})
  };
  const handlePassWord = event => {
    changeCount({PassWord: event, UserName: Acount['UserName']})
  };
  const handleLogin = () => {
    setErrorUserName('')
    setErrorPassWord('')

    if(Acount.UserName.length == 0){
      setErrorUserName('vui long nhap username')
      setErrorPassWord('vui long nhap Password')
    }
    else if(Acount.UserName.length == 0) {
      setErrorUserName('vui long nhap username')
    }else if(Acount.PassWord.length == 0) {
      setErrorPassWord('vui long nhap Password')
    }else {
      console.log(Acount)

    }
  }

  return (
    <ImageBackground style={stylelogin.container}>
      <Loading  />
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
            <Text style={[stylelogin.texterror,{display: errorUserName.length > 0 ?'flex':'none'}]}>{errorUserName}</Text>
            <Text style={stylelogin.textlabel}>Password</Text>
            <TextInput
              placeholder={'password'}
              placeholderTextColor={'white'}
              style={stylelogin.textinput}
              secureTextEntry={true}
              onChangeText={handlePassWord}
            />
            <Text style={[stylelogin.texterror,{display: errorPassWord.length > 0 ?'flex':'none'}]}>{errorPassWord}</Text>
            <Text style={stylelogin.textlogin} onPress={handleLogin}>LOGIN</Text>
            <Text
              style={stylelogin.textregit}
              onPress={() => register.bind(this)}>
              REGISTER
            </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(login);

const stylelogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'center',
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
    marginLeft: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerinput: {
    flex: 2,
  },
  textinput: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 10,
    borderRadius: 4,
    color: 'white',
    width: 330,
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
  textregit: {
    fontStyle: 'italic',
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 8,
  },
  textlogin: {
    fontStyle: 'italic',
    alignSelf: 'center',
    borderRadius: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  connet: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  imageicon: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
