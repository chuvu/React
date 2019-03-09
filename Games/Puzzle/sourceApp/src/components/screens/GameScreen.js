/**
 * Created by @musta in 09/12/18
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Modal, Alert, Image } from 'react-native';
import PropTypes from 'prop-types';

import { TopGameSection } from "../index";

class GameScreen extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
      showModal: false
    };
  }
  
  static navigationOptions = {
    title: 'Game',
  };
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TopGameSection/>
        <Button title={'Modal Go'} onPress={() => this.setState ({ showModal: true })}/>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => {
            Alert.alert ('Modal has been closed.');
            this.setState({showModal: false})
          }}>
          
          <Image source={require('../../assets/images/img-01.jpg')} style={{width: 350, height: 350}}/>
        </Modal>
      </View>
    );
  }
}

GameScreen.propTypes = {};

export default GameScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 5
  }
});