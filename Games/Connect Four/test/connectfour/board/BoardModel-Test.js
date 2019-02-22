import { expect } from 'chai';

import addDiscToBoard from '../../../src/connectfour/board/AddDisc';
import BoardModel from '../../../src/connectfour/board/BoardModel';
import { colors } from '../../../src/connectfour/board/ColorHelper';

describe('Board', () => {
    describe('constructor', () => {
        it('should use width and height parameters', () => {
            const board = new BoardModel(2, 2);

            expect(board.cells.length).to.be.equal(2);

            board.cells.forEach((column) => {
                expect(column.length).to.be.equal(2);
            });
        });
    });

    describe('isFull', () => {
        it('should recognize when a board is full', () => {
            let board = new BoardModel(1, 1);
            expect(board.isFull()).to.be.false;
            board = addDiscToBoard(board, 0, colors.red);
            expect(board.isFull()).to.be.true;
        });
    });
});
