import { transposeHorizontally, transposeDiagonally } from '../../tool/ArrayTransposer';
import hasConsecutiveValues from '../../tool/ArrayConsecutive';
import { colors } from './ColorHelper';

export default class Board {
    constructor(width, height) {
        this.cells = [];
        this.initializeCells(width, height);
    }

    initializeCells(width, height) {
        this.cells = Array.from(Array(width), () =>
            Array(height).fill(colors.empty)
        );
    }

    isColumnFull(columnNumber) {
        return this.cells[columnNumber].every(cell => cell !== 0);
    }

    isFull() {
        return this.cells.every(column =>
            column.every(cell =>
                cell !== 0
            )
        );
    }

    hasVerticallyAlignedDiscs() {
        return hasConsecutiveValues(this.cells);
    }

    hasHorizontallyAlignedDiscs() {
        return hasConsecutiveValues(transposeHorizontally(this.cells));
    }

    hasDiagonalBottomLeftTopRightAlignedDiscs() {
        return hasConsecutiveValues(transposeDiagonally(this.cells, true));
    }

    hasDiagonalTopLeftBottomRightAlignedDiscs() {
        return hasConsecutiveValues(transposeDiagonally(this.cells));
    }
}
