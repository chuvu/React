import React from 'react';
import { AppRegistry, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Background extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../src/img/bg.jpg')}
        style={styles.container}>
                {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('trygui1', () => Background);
