import React, { Component } from 'react';
import { View, StyleSheet, Animated, Platform, Text } from 'react-native';
 
export default class App extends Component<{}>
{
    constructor()
    {
        super();
 
        this.animatedValue = new Animated.Value(0);
    }
 
    animateBackgroundColor = () =>
    {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 12000
            }
        ).start(() => { this.animateBackgroundColor() });
    }
 
    componentDidMount()
    {
        this.animateBackgroundColor();
    }
 
    render()
    {
        const backgroundColorVar = this.animatedValue.interpolate(
        {
            inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],
            outputRange: [ '#71a98b', '#b15c8e', '#dc6b68', '#6c5a94', '#b14c4e', '#71a98b' ]
        });
 
        return(
            <Animated.View style = {[ styles.container, { backgroundColor: backgroundColorVar } ]}>
                <Text style = { styles.text }>Animated Background</Text>
            </Animated.View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    text:
    {
        color: 'white',
        fontSize: 25
    }
});