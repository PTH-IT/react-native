import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import home from '../home/home';
import setting from '../setting/setting';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import  Ionicons   from  'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function TabNavigator(props) {

  return (

    <Tab.Navigator screenOptions={{

      tabBarStyle: {
        // position: 'absolute',
        // bottom: 10,
        // left: 20,
        // right: 20,
        // elevation: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 60,

      }
    }}

    >
      <Tab.Screen name="Home" initialParams={{ phone: 1 }} options={
        {
          unmountOnBlur: true,
          header:(props) => { 
          },
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name='ios-home-outline' size={size} color={color} />;
          },
        }
      } component={home}  />
       <Tab.Screen name="Settings" initialParams={{ phone: 1 }} options={
        {
          unmountOnBlur: true,
          headerTitle: "Settings",
          headerRight:(props) => { 
            return <Ionicons  name='md-options-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  />
          },
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused, color, size }) => {
          
            return <Ionicons name='md-settings-outline' size={size} color={color} />;
          },
        }
      } component={setting}  />
     
    </Tab.Navigator>

  )

}
export default TabNavigator;
