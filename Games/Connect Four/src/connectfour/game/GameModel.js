import BoardModel from '../board/BoardModel';

export default class Game {

    constructor(firstPlayerName = 'Player #1', secondPlayerName = 'Player #2') {
        this.board = new BoardModel(7, 6);

        this.initializePlayers(firstPlayerName, secondPlayerName);

        this.currentPlayer = Math.random() < 0.5 ? this.player1 : this.player2;
    }

    isCurrentPlayer(player) {
        return this.currentPlayer === player;
    }

    getPlayerFromColor(color) {
        if (this.player1.color === color) {
            return this.player1;
        } else if (this.player2.color === color) {
            return this.player2;
        }
        return null;
    }

    getWonStatus(color) {
        return {
            status: 'won',
            winner: this.getPlayerFromColor(color),
        };
    }

    getStatus() {
        const verticallyAlignedDiscs = this.board.hasVerticallyAlignedDiscs();
        if (verticallyAlignedDiscs.areConsecutive) {
            return this.getWonStatus(verticallyAlignedDiscs.which);
        }

        const horizontallyAlignedDiscs = this.board.hasHorizontallyAlignedDiscs();
        if (horizontallyAlignedDiscs.areConsecutive) {
            return this.getWonStatus(horizontallyAlignedDiscs.which);
        }

        const diagonallyBottomLeftTopRightAlignedDiscs = this.board.hasDiagonalBottomLeftTopRightAlignedDiscs();
        if (diagonallyBottomLeftTopRightAlignedDiscs.areConsecutive) {
            return this.getWonStatus(diagonallyBottomLeftTopRightAlignedDiscs.which);
        }

        const diagonallyTopLeftBottomRightalignedDiscs = this.board.hasDiagonalTopLeftBottomRightAlignedDiscs();
        if (diagonallyTopLeftBottomRightalignedDiscs.areConsecutive) {
            return this.getWonStatus(diagonallyTopLeftBottomRightalignedDiscs.which);
        }

        if (this.board.isFull()) {
            return {
                status: 'draw',
            };
        }

        return {
            status: 'playing',
        };
    }
}
