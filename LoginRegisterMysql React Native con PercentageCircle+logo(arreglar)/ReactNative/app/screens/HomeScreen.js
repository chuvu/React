import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import { withNavigation } from 'react-navigation';
import Dimensions from 'Dimensions';

export default class HomeScreen extends Component {
  static navigationOptions= ({navigation}) =>({
   header: null
  });
  logout = () =>{
      Alert.alert(
        'Warning!',
        'Are you sure?',
        [
          {text:'yes', onPress: () => this.props.navigation.navigate('LoginScreen')},
          {text:'no', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ]
      );
  };
  render() {
    return (
      <ImageBackground
        source={require('../src/img/bgHome.jpg')}
        style={styles.container}>
                <Text>Hello, I am HomeScreen</Text>
                <TouchableOpacity
                style={styles.LogoutBtn}
                onPress={this.logout}
                >
                  <Text style={styles.btnText}> Logout </Text>
                </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoutBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0077be',
    height: MARGIN,
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 50,
    zIndex:100,
  },
});

AppRegistry.registerComponent('assessment', () => HomeScreen);
