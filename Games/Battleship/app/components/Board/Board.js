import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

import BoardFrame from '../BoardFrame'
import { GUESS } from '../../actions/gameActions'

class Board extends Component {
  constructor(props) {
    super(props)
  }

  tmpActionButton(i, j) {
    if (!this.props.game.gameOver)
      this.props.GUESS(i, j)
  }

  decideSquareStyle(square) {
    let isNeutral = square.condition
    let isWater = !square.haveShip
    let isWrecked
    let isHitted

    if (square.haveShip) {
      isWrecked = !this.props.game.ships[square.haveShip.shipIndex].condition
      isHitted = !square.haveShip.condition
    }

    let backgroundColor = isNeutral ? color.neutral : isWater ? color.sea : isWrecked ? color.wrecked : color.hitted

    return {
      backgroundColor,
      borderTopWidth: isNeutral ? 1 : 0,
      borderLeftWidth: isNeutral ? 1 : 0
    }
  }

  render() {

    if (this.props.game.gameOver) this.props.navigation.navigate('GameOver')

    return (
      <View style={styles.container}>
        <BoardFrame>
          {this.props.game.board.map((row, i) => (
            <View key={i} style={styles.row}>
              {row.map((square, j) => (
                <TouchableHighlight
                  key={j}
                  onPress={() => square.condition ? this.tmpActionButton(i, j) : null}
                  style={[
                    styles.square,
                    {...this.decideSquareStyle(square)}
                  ]}
                  underlayColor={square.condition ? 'white' : this.decideSquareStyle(square).backgroundColor}
                >
                  {/* <View/> */}
                  <Text>{square.haveShip ? 'e' : null}</Text>
                </TouchableHighlight>
              ))}
            </View>
          ))}
        </BoardFrame>
      </View>
    )
  }
}

const color = {
  neutral: '#F5F5F5',
  sea: '#013964',
  hitted: '#FF5500',
  wrecked: '#2D3438'
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'column'
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  square: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#E9E9E9'
  },

  textSquare: {
    alignSelf: 'center'
  }
})

const mapStateToProps = state => ({
  game: state.game
})

const mapDispatchToProps = dispatch => ({
  GUESS: (i, j) => dispatch(GUESS(i, j))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
