import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './app/screens/Homescreen.js';
import Detailscreen from './app/screens/Detailscreen';


const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: Detailscreen }

  },
  {
    initialRouteName: "Home",
    headerMode :'none',
    
  }
);

export default createAppContainer(App);
