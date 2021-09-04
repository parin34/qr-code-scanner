import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './screens/fb'
import Ig from './screens/ig'

export default class main extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
    
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction : {screen: Fb},
  Search: {scren:Ig}
})
const AppContainer = createAppContainer(TabNavigator)