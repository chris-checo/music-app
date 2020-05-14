import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Hiphop from './src/login/hiphop.js';
import Latin from './src/login/latin.js';
import Pop from './src/login/pop.js';
import Rhythm from './src/login/rhythm.js';







const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Hiphop: {screen: Hiphop},
    Latin: {screen: Latin},
    Pop: {screen: Pop},
  Rhythm: {screen: Rhythm},


  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

