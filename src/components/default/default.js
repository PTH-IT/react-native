import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import {
    StyleSheet, View,
  } from 'react-native';
  export default function  Default()  {
    const navigation = useNavigation();
    const device = useSelector((state) => state.Device)
    React.useEffect(() => {  
        console.log(device.tab)
       navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: device.tab, },
            ],
        })
      )

    }, [device.tab]);
    return (
        <View></View>
    ) 
}
