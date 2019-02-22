import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Button from '../../chrome/Button';

const styles = StyleSheet.create({
    placeholder: {
        height: 40,
        width: 40,
    },
    button: {
        margin: 0,
    },
});

const ControlButton = ({ onPress, enabled, column }) => {
    const dropDisc = () => {
        onPress(column);
    };

    return (
        !enabled ?
            <View style={styles.placeholder} /> :
            <View style={styles.placeholder} >
                <Button text={String(column + 1)} onPress={dropDisc} style={styles.button} />
            </View>
    );
};

ControlButton.propTypes = {
    onPress: React.PropTypes.func.isRequired,
    enabled: React.PropTypes.bool,
    column: React.PropTypes.number.isRequired,
};

ControlButton.defaultProps = {
    enabled: true,
};

export default ControlButton;
