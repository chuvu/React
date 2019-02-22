import update from 'react-addons-update';

import addDiscToBoard from '../board/AddDisc';
import switchGamePlayers from './SwitchPlayers';

export default function playTurn(game, columnNumber) {
    const nextBoard = addDiscToBoard(game.board, columnNumber, game.currentPlayer.color);

    return switchGamePlayers(update(game, { board: { $set: nextBoard } }));
}
