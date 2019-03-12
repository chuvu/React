import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './src/Home';

const Navegador=StackNavigator({
Home:{
  screen:Home
}
});

export default Navegador;
console.disableYellowBox = true;
