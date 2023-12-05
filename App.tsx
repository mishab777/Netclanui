import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Refine from './pages/Refine';

const Stack = createStackNavigator();


const App = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Refine" component={Refine} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})