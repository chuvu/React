import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5cb85c',
        borderRadius: 20,
        padding: 10,
        margin: 5,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
});

const Button = ({ onPress, text, style = null }) => (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
);

Button.propTypes = {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string.isRequired,
    style: View.propTypes.style,
};

export default Button;
