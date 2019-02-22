import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { StackNavigator } from 'react-navigation'; 


export default class LoginScreen extends Component {
render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Button
          title="Go to HomeScreen"
          onPress={() => navigate('Home')}
        />
		<TextInput
           maxLength = {20}
        />
        <TextInput
           maxLength = {20}
        />
      </View>
    )
  }
}