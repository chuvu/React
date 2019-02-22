import React, { Component } from 'react'
import { View, Dimensions, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'; 


export default class BottomNav extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
    <View style={{flex: 1, borderColor: 'blue', flexDirection: 'row', borderWidth:2, height: height, width: width}}> 
        <View style={{flex: 1, borderColor: 'blue', borderWidth:2, height: height, width: width}}> 
          <Button
                title="Go to PokerScreen"
                onPress={() => navigate('Poker')}
          />
        </View>
        <View style={{flex: 1, borderColor: 'green', borderWidth:2, height: height, width: width}}> 
    
        </View>
        <View style={{flex: 1, borderColor: 'green', borderWidth:2, height: height, width: width}}> 
    
        </View>
        <View style={{flex: 1, borderColor: 'green', borderWidth:2, height: height, width: width}}> 
    
        </View>
        <View style={{flex: 1, borderColor: 'green', borderWidth:2, height: height, width: width}}> 
    
        </View>

    </View>
    )
  }
}
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
						
                        
                        
                        