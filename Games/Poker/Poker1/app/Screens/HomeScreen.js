import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Button, Text, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'; 
import BottomNav from '../SharedComponents/BottomNavigation';
export default class HomeScreen extends Component {

render() {
	const { navigate } = this.props.navigation;

		return (
		<View style={styles.container}>
				<View style={{flex: 1, borderColor: 'teal', borderWidth: 1, height: height, width: width}}> 


				</View>
				<View style={{flex: 29}}> 
						<View style={{flex: 1, borderColor: 'green', borderWidth: 2, height: height, width: width}}>

						</View>
						<View style={{flex: 1, borderColor: 'blue', borderWidth: 2, height: height, width: width}}>

						</View>
						<View style={{flex: 1, borderColor: 'gray', borderWidth: 2, height: height, width: width}}>

						</View>
						<View style={{flex: 1, borderColor: 'red', borderWidth: 2, height: height, width: width}}>
							<Button
							title="Go to LoginScreen"
							onPress={() => navigate('Login')}
							/>

							<View style={{flex: 1}}/>
							<BottomNav navigation={this.props.navigation}/>
						</View>                
				</View>
			</View>
		)
	}
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
	container: {
		height: height,
		width: width,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mainContainers: {
		flex: 2
	}
});

