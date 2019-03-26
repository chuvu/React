import React, { Component } from 'react';
import { AppRegistry,StyleSheet, KeyboardAvoidingView, View, ActivityIndicator,
        TouchableOpacity, Image, Button, Text, Keyboard, TextInput,Alert} from 'react-native';
import Dimensions from 'Dimensions';

import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import Background from '../components/background';
import Logo from '../components/logo';

import usernameImg from '../src/img/username.png';
import passwordImg from '../src/img/password.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      username:'',
      password:''
    };
    this.showPass = this.showPass.bind(this);
  }
  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }
  login = () =>{
      const {username,password} = this.state;
      if(username==""){
        alert("Please enter username.");
      }
      else if(password==""){
      alert("Please enter password.");
      }
      else{
      fetch('http://192.168.1.39/PHP/login.php',{
        method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          username: username,
          password: password
        })

      })
      .then((response) => response.json())
       .then((responseJson)=>{
         if(responseJson == "ok"){
           Alert.alert(
             'Success',
             'Welcome ' + username,
             [
               {text:'ok', onPress: () => this.props.navigation.navigate('HomeScreen') }
             ]
           );
         }else{
           alert(responseJson);
         }
       })
       .catch((error)=>{
       console.error(error);
       });
      }
      Keyboard.dismiss();
    }
  static navigationOptions = {
  header: null,
};
  render() {
    return (
      <Background>
        <Logo/>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Image source={require('../src/img/username.png')} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              placeholder='Enter Username'
              placeholderTextColor='#424242'
              underlineColorAndroid="transparent"
              onChangeText={username => this.setState({username})}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={require('../src/img/password.png')} style={styles.inlineImg} />
            <TextInput
              style={styles.input}
              secureTextEntry={this.state.showPass}
              placeholder='Enter Password'
              placeholderTextColor='#424242'
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
          </View>
        	</View>
          <View style={styles.btncontainer}>
            <TouchableOpacity
              style={styles.LoginBtn}
              onPress={this.login}
              >
              <Text style={styles.btnText}> LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.RegBtn}
            onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >
              <Text style={styles.btnText}> REGISTER </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Background>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 10,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#000000',
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 25,
    top: 9,
  },
  btncontainer: {
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  LoginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4e3fc',
    height: MARGIN,
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 60,
    zIndex:100,
  },
  RegBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4e3fc',
    height: MARGIN,
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 50,
    zIndex:100,
  },
  btnText: {
    color:'black',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('assessment', () => LoginScreen);
