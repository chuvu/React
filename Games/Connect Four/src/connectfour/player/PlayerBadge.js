import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Text,
} from 'react-native';

import PlayerModel from './PlayerModel';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    disc: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    1: {
        backgroundColor: 'red',
    },
    2: {
        backgroundColor: 'yellow',
    },
    highlighted: {
        backgroundColor: 'lightsteelblue',
    },
    loader: {
        marginLeft: 10,
    },
});

const PlayerBadge = ({ player, highlighted, loading = false, style = null }) => {
    const wrapperStyle = [styles.wrapper];
    if (highlighted) {
        wrapperStyle.push(styles.highlighted);
    }

    return (
        <View style={[wrapperStyle, style]}>
            <View style={[styles.disc, styles[player.color]]} />
            <Text>{player.name}</Text>
            <ActivityIndicator
                animating={loading}
                size="small"
                style={styles.loader}
                color="red"
            />
        </View>
    );
};

PlayerBadge.propTypes = {
    player: React.PropTypes.instanceOf(PlayerModel).isRequired,
    highlighted: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    style: View.propTypes.style,
};

export default PlayerBadge;
