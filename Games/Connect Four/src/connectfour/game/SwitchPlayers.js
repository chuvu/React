import update from 'react-addons-update';

export default function switchGamePlayers(game) {
    const nextPlayer = game.currentPlayer === game.player1 ? game.player2 : game.player1;
    return update(game, {
        currentPlayer: {
            $set: nextPlayer,
        },
    });
}
