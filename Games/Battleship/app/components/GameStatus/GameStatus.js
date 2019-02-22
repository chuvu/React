import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class GameStatus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusWrapper}>
          <Text style={styles.statusTitle}>Moves: {this.props.game.moves}</Text>
        </View>
        <View style={styles.statusWrapper}>
          <View style={styles.shipContainer}>
            {this.props.game.ships.map((ship, index) =>
              <View
                key={index}
                style={[styles.ship, {
                  backgroundColor: ship.condition ? '#E9E9E9' : '#FF5500',
                  width: ship.size * 15
                }]}
              />
            )}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10
  },

  statusWrapper: {
    marginBottom: 10,
    alignItems: 'center'
  },

  statusTitle: {
    color: '#F5F5F5',
    fontSize: 15,
    fontWeight: 'bold'
  },

  movesStatus: {
    width: 50,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center'
  },

  shipContainer: {
    flexDirection: 'row'
  },

  ship: {
    marginHorizontal: 2,
    height: 20,
    borderRadius: 10
  }
})

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps)(GameStatus)
