import React from "react";
import { useSelector } from 'react-redux';


import {
    StyleSheet, View,
  } from 'react-native';
  export default function  Default(props)  {
    const device = useSelector((state) => state.Device)

    React.useEffect(() => {  
        props.navigation.navigate(device.tab);

    }, [device.tab]);
    return (
        <View></View>
    ) 
}
