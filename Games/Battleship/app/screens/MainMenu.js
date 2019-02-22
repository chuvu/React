import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native'

import Button from '../components/Button'
import { SET_GAME_STATE } from '../actions/gameActions'
import realm from '../config/realm'

class MainMenu extends Component {
  static navigationOptions = {
    title: 'Main Menu',
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      bestScore: null
    }
  }

  componentWillMount() {
    StatusBar.setBarStyle('dark-content')
    if (Platform.OS == 'android')
      StatusBar.setBackgroundColor('#E9E9E9')

    const currentBestScore = realm.objects('Game')
    if (currentBestScore.length > 0)
      this.setState({
        bestScore: currentBestScore.filtered('id = 1')[0].bestScore
      })
  }

  playButton() {
    this.props.SET_GAME_STATE()
    this.props.navigation.navigate('Game')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gameTitle}>BATTLESHIP</Text>
        <View style={styles.bestScore}>
          <Text>Best Redundancy Score: {this.state.bestScore}</Text>
        </View>
        <Button onPress={() => this.playButton()} dark>PLAY</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E9E9',
    flex: 1,
    justifyContent: 'center'
  },

  gameTitle: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF5500'
  },

  bestScore: {
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },

  playButton: {
    width: 120,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#0C5984',
    alignSelf: 'center'
  },

  playButtonText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F5F5F5'
  }
})

const mapDispactToProps = dispatch => ({
  SET_GAME_STATE: () => dispatch(SET_GAME_STATE())
})

export default connect(() => ({}), mapDispactToProps)(MainMenu)
