import { expect } from 'chai';

import { transposeHorizontally, transposeDiagonally } from '../../src/tool/ArrayTransposer';

describe('ArrayTransposer', () => {
    describe('transposeHorizontally', () => {
        it('should transpose correctly', () => {
            const array = [
                [0, 1],
                [2, 1],
            ];

            const transposedArray = transposeHorizontally(array);

            const expectedArray = [
                [0, 2],
                [1, 1],
            ];

            expect(transposedArray).to.be.deep.equal(expectedArray);
        });
    });

    describe('transposeDiagonally', () => {
        it('should transpose correctly from top left to bottom right diagonals', () => {
            const array = [
                [0, 1],
                [2, 1],
            ];

            const transposedArray = transposeDiagonally(array);

            const expectedArray = [
                [0],
                [2, 1],
                [1],
            ];

            expect(transposedArray).to.be.deep.equal(expectedArray);
        });

        it('should transpose correctly from bottom left to top right diagonals', () => {
            const array = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
            ];

            const transposedArray = transposeDiagonally(array, true);

            const expectedArray = [
                    [6],
                    [7, 3],
                    [8, 4, 0],
                    [5, 1],
                    [2],
            ];

            expect(transposedArray).to.be.deep.equal(expectedArray);
        });
    });
});
