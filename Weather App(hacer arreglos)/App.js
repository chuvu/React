import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './app/screens/Homescreen.js';
import Detailscreen from './app/screens/Detailscreen';
import Searchscreen from "./app/screens/Searchscreen.js";

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: Detailscreen },
    Search : {screen:Searchscreen}
  },
  {
    initialRouteName: "Home",
    headerMode :'none',
    
  }
);

export default createAppContainer(App);
