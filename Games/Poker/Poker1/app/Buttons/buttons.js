/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class Buttons extends Component {
  bet = () => {
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Button title='Bet'>Bet</Button>
      <Button title='Call'>Call</Button>
      <Button title='Raise'>Raise</Button>
      <Button title='Check'>Check</Button>
      <Button title='Fold'>Fold</Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
