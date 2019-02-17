/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button
} from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
        super(props);
        this.state ={ f1: 0,f2: 0,result: 0 };
    }

onButtonPressed = function() { this.setState({ result:this.state.f1 })}
  _handleTextChange = f1=> { this.setState({ f1 }); 
  };
  _handleTextChange2 = f2 => { this.setState({ f2 }); 
  };
  plus = function() {
    var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x + y;
    this.setState({ result: calcu})
  }
  minus = function() {
    var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x - y;
    this.setState({ result: calcu})
  }
  
  devide = function(){
      var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x / y;
    this.setState({ result: calcu})
  }
  multi = function(){
     var x = parseFloat(this.state.f1);
    var y = parseFloat(this.state.f2);
    var calcu = x * y;
    this.setState({ result: calcu})
  }
  
    
  render() {
    return (
      <View>
      
      <Text style={styles.paragraph}>Number1:</Text>
      <TextInput
        style={{ width: 200, height: 44, padding: 8 }}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f1:parseInt(text)})}
      />
      <Text style={styles.paragraph}>Number2:</Text>
      <TextInput
        style={{ width: 200, height: 44, padding: 8 }}
         keyboardType ='numeric'
        onChangeText={(text) => this.setState({f2:parseInt(text)})}
      />
       <Text style={styles.paragraph}>Resultado:</Text>
      <Text style={{color: 'blue'}}>{this.state.result}</Text>

       <Button title='Add' onPress={this.plus.bind(this)}/>
        <Button title='Sustract' onPress={this.minus.bind(this)}/>
        <Button title='Divide' onPress={this.devide.bind(this)}/>
        <Button title='Multiply' onPress={this.multi.bind(this)}/>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
paragraph: {
  margin: 24,
  fontSize:18,
  fontWeight: 'bold',
  color:'#34495e',
},
}); 
        