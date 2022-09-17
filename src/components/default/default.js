import React from "react";
import {connect} from 'react-redux';


import {
    StyleSheet, View,
  } from 'react-native';
 function  Default(props)  {
  let {Logging} = props;

    React.useEffect(() => {
    console.log(props);
        props.navigation.navigate(Logging);

    }, [Logging]);
    return (
        <View></View>
    ) 
}
export default connect(state => state)(Default)