/**
 * Created by @musta in 09/12/18
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';



class HomeScreen extends Component {
  
  constructor(props) {
    super (props);
    this.state = {};
  }
  
  static navigationOptions = {
    title: 'Puzzle Game',
  };
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is a classec Puzzle game :D!</Text>
        <Button style={styles.btn} title={'Start'} onPress={() => {
          navigation.navigate ('Game')
        }}/>
      </View>
    );
  }
}

HomeScreen.propTypes = {};

export default HomeScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10
  },
  title: {
    fontSize: 22,
    marginVertical: 5
  },
  btn: {
    height: 135
  }
});