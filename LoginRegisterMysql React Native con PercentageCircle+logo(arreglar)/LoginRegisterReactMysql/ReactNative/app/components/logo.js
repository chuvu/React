import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import LogoSource from '../src/img/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoSource} style={styles.image} />
        <Text style={styles.text}>   CASHCART</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
