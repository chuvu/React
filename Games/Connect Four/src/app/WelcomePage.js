import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Button from '../chrome/Button';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 32,
        marginBottom: 20,
    },
    subtitle: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
    },
});

const WelcomePage = ({ navigator }) => {
    const startPlayingWithFriend = () => {
        navigator.replace({
            id: 'PlayPage',
            againstComputer: false,
        });
    };

    const startPlayingAgainstComputer = () => {
        navigator.replace({
            id: 'PlayPage',
            againstComputer: true,
        });
    };

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Start playing...</Text>
            <Button onPress={startPlayingWithFriend} text="With a friend" />
            <Button onPress={startPlayingAgainstComputer} text="Against computer" />
        </View>
    );
};

WelcomePage.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
};

export default WelcomePage;
