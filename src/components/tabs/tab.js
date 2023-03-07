import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import TabHome from '../home/tabhome';
import Setting from '../setting/setting';
import Contact from '../contact/contact';
import Friend  from '../friend/friend';
import CameraVideo from '../camera/camera'
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
        backgroundColor: 'black',
        height: 60,
        paddingBottom:5

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
      } component={TabHome}  />
       <Tab.Screen name="Friend" initialParams={{ phone: 1 }} options={
        {
          unmountOnBlur: true,
          headerTitle: "Friend",
          headerRight:(props) => { 
            return <Ionicons  name='person-add' size={30} color={'#8E8E8F'} style={{marginRight:15}}  />
          },
          tabBarLabel: "Friend",
          tabBarIcon: ({ focused, color, size }) => {
          
            return <Ionicons name='person-add' size={size} color={color} />;
          },
        }
      } component={Friend}  />

       <Tab.Screen name="Video" initialParams={{ phone: 1 }} options={
        {
          unmountOnBlur: true,
          header:(props) => { 
          },
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name='scan-circle' size={size*1.5} color={color}  />;
          },
        }
      } component={CameraVideo}  />

        <Tab.Screen name="Contact" initialParams={{ phone: 1 }} options={
        {
          unmountOnBlur: true,
          headerTitle: "Contact",
          headerRight:(props) => { 
            return <Ionicons  name='chatbubble-ellipses-outline' size={30} color={'#8E8E8F'} style={{marginRight:15}}  />
          },
          tabBarLabel: "Contact",
          tabBarIcon: ({ focused, color, size }) => {
          
            return <Ionicons name='chatbubble-ellipses-outline' size={size} color={color} />;
          },
        }
      } component={Contact}  />
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
      } component={Setting}  />
     
     
    </Tab.Navigator>

  )

}
export default TabNavigator;
