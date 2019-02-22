import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import Routes from '../config/routes'

const AppWithNavigationState = props => (
  <Routes
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav
    })}
  />
)

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
