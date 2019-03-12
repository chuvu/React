import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Mapa from './src/Mapa';

const Navegador=StackNavigator({
Mapa:{
  screen:Mapa
}
});

export default Navegador;
console.disableYellowBox = true;
