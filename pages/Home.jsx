import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './Explore';
import Network from './Network';
import Chat from './Chat';
import Contacts from './Contacts';
import Groups from './Groups';


const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="explore" component={Explore}
      options={{
        tabBarLabel:"Explore",
        tabBarLabelStyle:{color:"#143D59"},
        tabBarIcon:({focused})=>(
          <Image source={require("../assets/view.png")}
          style={{width:25, height:25, tintColor:focused ? '#143D59' : 'gray'}}/>
  )
      }} 
      />
      <Tab.Screen name="network" component={Network} 
      options={{
        tabBarLabel: 'Network',
        tabBarLabelStyle:{color:"#143D59"},
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/network.png')} 
            style={{ width: 25, height: 25, tintColor: focused ? '#143D59' : 'gray' }}
          />
        ),
      }}
      />
      <Tab.Screen name="chat" component={Chat} 
      options={{
        tabBarLabel: 'Chat',
        tabBarLabelStyle:{color:"#143D59"},
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/chat.png')} 
            style={{ width: 25, height: 25, tintColor: focused ? '#143D59' : 'gray' }}
          />
        ),
      }}
      />
      <Tab.Screen name="contact" component={Contacts}
       options={{
        tabBarLabel: 'Contacts',
        tabBarLabelStyle:{color:"#143D59"},
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/contact.png')} 
            style={{ width: 25, height: 25, tintColor: focused ? '#143D59' : 'gray' }}
          />
        ),
      }}
       />
      <Tab.Screen name="groups" component={Groups}
      options={{
        tabBarLabel: 'Groups',
        tabBarLabelStyle:{color:"#143D59"},
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assets/tag.png')} 
            style={{ width: 25, height: 25, tintColor: focused ? '#143D59' : 'gray' }}
          />
        ),
      }}
       />
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})