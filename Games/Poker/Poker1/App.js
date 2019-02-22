import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import LoginScreen from './app/Screens/LoginScreen';
import HomeScreen from './app/Screens/HomeScreen';
import PokerScreen from './app/Screens/PokerScreen';
console.disableYellowBox = true;

const RootStack = StackNavigator (
  	{
    	Home: {
      		screen: HomeScreen,
      		navigationOptions:  {
        
      		}
    	},
    	Login: {
      		screen: LoginScreen,
      		navigationOptions:  {
        		
    		}
		},
		Poker: {
			screen: PokerScreen,
			navigationOptions:  {
			  
		  }
	  },
  	},
  	{
    	initialRouteName: 'Home',
  	}
);


export default class App extends Component {
  render() {
  	return ( <RootStack /> )
  }
}

