import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

const calculadora = () => (
  <App />
);

AppRegistry.registerComponent('calculadora', () => calculadora);
