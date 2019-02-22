import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    cell: {
        padding: 5,
        alignItems: 'stretch',
        flex: -1,
    },
    disc: {
        flex: -1,
        borderRadius: 20,
        height: 40,
        width: 40,
    },
    0: {
        backgroundColor: 'white',
    },
    1: {
        backgroundColor: 'red',
    },
    2: {
        backgroundColor: 'yellow',
    },
});

const Cell = ({ color, style = null }) =>
    <View style={[styles.cell, style]}>
        <View style={[styles.disc, styles[color]]} />
    </View>
;

Cell.propTypes = {
    color: React.PropTypes.number.isRequired,
    style: View.propTypes.style,
};

export default Cell;
