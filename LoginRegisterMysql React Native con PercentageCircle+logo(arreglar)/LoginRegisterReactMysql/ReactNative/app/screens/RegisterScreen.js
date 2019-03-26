import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity,Alert
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import { withNavigation } from 'react-navigation';

import Background from '../components/background';

export default class RegisterScreen extends Component {
	   static navigationOptions= ({navigation}) =>({
		  header: null
	});
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:'',
			firstName:'',
      lastName:'',
      cpassword:'',
      showPass:true
		}
	}

	userRegister = () =>{
		const {username} = this.state;
		const {password} = this.state;
		const {firstName} = this.state;
    const {lastName} = this.state;
    const {cpassword} = this.state;

    if(username=="" || password=="" || firstName=="" || lastName=="" || cpassword==""){
      alert("Please fill out all fields");
    }else if (password!=cpassword) {
        alert("Passwords do not match.");
    }
    else{
		fetch('http://192.168.1.39/PHP/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
				lastName: lastName,
        cpassword: cpassword,
			})
		})
		.then((response) => response.json())
			.then((responseJson) =>{
        if(responseJson == 'User Registered Successfully'){
          Alert.alert(
            'Success',
            'User Registered Successfully',
            [
              {text:'ok', onPress: () => this.props.navigation.goBack() }
            ]
          );
          //this.props.navigation.goBack()
        }else{
          alert(responseJson);
        }
			})
			.catch((error)=>{
				console.log(error);
			});
	}
}
  render() {
    return (
      <Background>
    <View style={styles.container}>
    <TextInput
      placeholder="Username"
      style={{width:300,margin:10, borderColor:"#a7dfe2",borderWidth:1,borderRadius:20,
      padding:7,paddingHorizontal: 90,backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
      placeholderTextColor='#232323'
      underlineColorAndroid="transparent"
      onChangeText= {username => this.setState({username})}
    />
    <TextInput
      placeholder="Password"
      style={{width:300,margin:10, borderColor:"#a7dfe2",borderWidth:1,borderRadius:20,
      padding:7,paddingHorizontal: 90,backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
      placeholderTextColor='#232323'
      underlineColorAndroid="transparent"
      secureTextEntry={this.state.showPass}
      onChangeText= {password => this.setState({password})}
    />
    <TextInput
      placeholder="Confirm Password"
      style={{width:300,margin:10, borderColor:"#a7dfe2",borderWidth:1,borderRadius:20,
      padding:7,paddingHorizontal: 90,backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
      placeholderTextColor='#232323'
      underlineColorAndroid="transparent"
      secureTextEntry={this.state.showPass}
      onChangeText= {cpassword => this.setState({cpassword})}
    />
	   <TextInput
	     placeholder="First name"
	     style={{width:300,margin:10, borderColor:"#a7dfe2",borderWidth:1,borderRadius:20,
       padding:7,paddingHorizontal: 90,backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
       placeholderTextColor='#232323'
	     underlineColorAndroid="transparent"
	     onChangeText= {firstName => this.setState({firstName})}
	   />
	   <TextInput
	     placeholder="Last Name"
       style={{width:300,margin:10, borderColor:"#a7dfe2",borderWidth:1,borderRadius:20,
       padding:7,paddingHorizontal: 90,backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
       placeholderTextColor='#232323'
       underlineColorAndroid="transparent"
	     onChangeText= {lastName => this.setState({lastName})}
	    />
  	  <TouchableOpacity
    		onPress={this.userRegister}
    		style={{alignItems: 'center',justifyContent: 'center',
        backgroundColor: '#d4e3fc',padding:5,paddingHorizontal:50,borderRadius:50}}>
      	  <Text style={{color:'black',fontWeight: 'bold',}}>Register</Text>
  	  </TouchableOpacity>
     </View>
     </Background>
   );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('assessment', () => RegisterScreen);
