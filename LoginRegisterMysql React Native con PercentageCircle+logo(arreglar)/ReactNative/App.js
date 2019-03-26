/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import { withNavigation } from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
        <AssessmentNavigator navigation={this.props.navigation}/>
    );
  }
}

const AssessmentNavigator = createStackNavigator({
  LoginScreen:LoginScreen,
  RegisterScreen:RegisterScreen,
  HomeScreen:HomeScreen,
});

AppRegistry.registerComponent('assessment', () => App);
