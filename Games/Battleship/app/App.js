import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import store from './config/store'
import AppWithNavigationState from './navigators/AppWithNavigationState'

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}
