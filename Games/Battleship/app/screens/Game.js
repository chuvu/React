import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'

import Board from '../components/Board'
import Button from '../components/Button'
import GameStatus from '../components/GameStatus'
import { SET_GAME_STATE } from '../actions/gameActions'

class Game extends Component {
  static navigationOptions = {
    title: 'Battleship',
    header: null
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content')
    if (Platform.OS == 'android')
      StatusBar.setBackgroundColor('#013964')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.SET_GAME_STATE()} style={styles.resetButton} dark>RESET</Button>
        <GameStatus/>
      <Board navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013964',
    justifyContent: 'center'
  },

  resetButton: {
    marginTop: 15,
    position: 'absolute',
    top: 20
  }
})

const mapDispactToProps = dispatch => ({
  SET_GAME_STATE: () => dispatch(SET_GAME_STATE())
})

export default connect(() => ({}), mapDispactToProps)(Game)
