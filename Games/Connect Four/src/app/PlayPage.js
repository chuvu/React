import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Board from '../connectfour/board/Board';
import Button from '../chrome/Button';
import ComputerGameModel from '../connectfour/game/ComputerGameModel';
import HumanGameModel from '../connectfour/game/HumanGameModel';
import PlayerBadge from '../connectfour/player/PlayerBadge';
import playTurn from '../connectfour/game/PlayTurn';
import { transposeHorizontally } from '../../src/tool/ArrayTransposer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#246dd5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 0,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
    },
    players: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    playerBadge: {
        padding: 10,
    },
    board: {
        flex: 0,
        alignSelf: 'stretch',
    },
});

export default class PlayPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: this.getGameModel(),
            canPlay: true,
        };
    }

    componentDidMount = () =>
        this.checkComputerTurn(this.state.game);

    getGameModel = function () {
        return this.props.againstComputer ?
            new ComputerGameModel() :
            new HumanGameModel();
    }


    backToHome = () => {
        this.props.navigator.replace({
            id: 'WelcomePage',
        });
    }

    playAgain = () => {
        this.setState({ game: this.getGameModel() });
        this.checkComputerTurn(this.state.game);
    }

    showGameStatus = (status, winner) => {
        const message = status === 'draw' ? 'Draw !' : `${winner.name} wins !`;

        Alert.alert(
            'Game over',
            message,
            [
                {
                    text: 'Back to home ',
                    style: 'cancel',
                    onPress: this.backToHome,
                },
                {
                    text: 'Play again',
                    style: 'default',
                    onPress: this.playAgain,
                },
            ],
            {
                cancelable: false,
            }
        );
    }

    dropDisc = (column) => {
        const nextGame = playTurn(this.state.game, column);
        this.setState({ game: nextGame });

        const { status, winner } = nextGame.getStatus();

        if (status !== 'playing') {
            this.showGameStatus(status, winner);
        } else {
            this.checkComputerTurn(nextGame);
        }
    }

    checkComputerTurn = (game) => {
        if (this.props.againstComputer && game.currentPlayer.isComputer) {
            this.setState({ canPlay: false });
            this.fetchColumn(game).then((bestColumn) => {
                this.dropDisc(bestColumn);
                this.setState({ canPlay: true });
            });
        }
    }

    fetchColumn = (game) => {
        const grid = transposeHorizontally(game.board.cells);
        const aiPlayer = game.currentPlayer.color;
        return fetch(`http://localhost:8000?grid=${JSON.stringify(grid)}&aiPlayer=${aiPlayer}`, {
            method: 'get',
            credentials: 'include',
        })
        .then((response) => {
            if (response.status === 200) {
                return response.text();
            }
            return -1;
        })
        .then(parseInt);
    }

    render() {
        const { game, canPlay } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Play</Text>

                <View style={styles.players}>
                    <PlayerBadge player={game.player1} highlighted={game.isCurrentPlayer(game.player1)} loading={!canPlay} style={styles.playerBadge} />
                    <PlayerBadge player={game.player2} highlighted={game.isCurrentPlayer(game.player2)} style={styles.playerBadge} />
                </View>

                <Board board={game.board} dropDisc={this.dropDisc} style={styles.board} canPlay={canPlay} />

                <Button onPress={this.backToHome} text="< Cancel game" />
            </View>
        );
    }
}


PlayPage.propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator),
    againstComputer: React.PropTypes.bool,
};
