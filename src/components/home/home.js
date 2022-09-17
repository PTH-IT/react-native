import { View, StyleSheet, TextInput, Text } from 'react-native';
import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import  Ionicons   from  'react-native-vector-icons/Ionicons';

function Home() {
  const [url,seturl] = React.useState("google.com")
  const [gotourl,setgotourl] = React.useState("google.com")
  const handleURL= (event)=>{
    seturl(event)
  }
  const handlegotoURL= (event)=>{
    setgotourl(url)
  }


  return (
    <View style={styles.container}>
      <View  style={styles.Headers} >
      <Ionicons name='ios-home-outline' size={30} color={'#8E8E8F'} style={styles.icon}/>
        <TextInput
          placeholder={'Nhập url hoặc tìm kiếm'}
          placeholderTextColor={'black'}
          style={styles.textinput}
          keyboardType="url"
          onChangeText={handleURL}

        />
        <Ionicons onPress={handlegotoURL} name='md-search-sharp' size={30} color={'#8E8E8F'}  style={styles.icon} /> 
       
         <Ionicons onPress={handlegotoURL} name='ios-add-circle-outline' size={30} color={'#8E8E8F'}  style={styles.icon} /> 
       
       
        
      </View>
      <WebView
        originWhitelist={['*']}
        source={{ uri: gotourl }}
        style={styles.web}
        onrelo
      />

    </View>
  )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Headers: {
    padding: 10,
    backgroundColor: 'black',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon:{
   alignItems: "center",
   alignSelf: "center",
   color:'white',
  },
  textinput: {
    
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'black',
    width: 280,
    marginLeft:5,
    marginRight:5,

   
  },
  web: {
    flex: 1,
  }
});
