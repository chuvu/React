import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class BoardFrame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topBar: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      leftCol: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square}/>

      {this.state.topBar.map((square, index) => (
          <View style={styles.square} key={index}>
            <Text style={styles.textSquare}>{square}</Text>
          </View>
        ))}

        <View style={styles.leftCol}>
          {this.state.leftCol.map((square, index) => (
            <View style={styles.square} key={index}>
              <Text style={styles.textSquare}>{square}</Text>
            </View>
          ))}
        </View>

        <View style={styles.board}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 331,
    height: 331,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9'
  },

  square: {
    backgroundColor: '#E9E9E9',
    width: 30,
    height: 30,
    justifyContent: 'center'
  },

  textSquare: {
    alignSelf: 'center',
    color: '#0C5984',
    fontWeight: 'bold',
    fontSize: 16
  },

  leftCol: {
    width: 30,
    height: 300
  },

  board: {
    flexWrap: 'wrap'
  }
})
