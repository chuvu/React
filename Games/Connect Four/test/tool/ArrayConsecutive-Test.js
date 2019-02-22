import { expect } from 'chai';

import hasConsecutiveValues from '../../src/tool/ArrayConsecutive';

describe('ArrayConsecutive', () => {
    it('should return true if there\'s the right amount of consecutive values', () => {
        const array = [[0, 1, 2, 3], [3, 3, 3, 4], [6, 6, 6, 6]];

        const { areConsecutive } = hasConsecutiveValues(array);

        expect(areConsecutive).to.be.true;
    });

    it('should return the right value which was consecutive', () => {
        const array = [[0, 1, 2, 3], [3, 3, 3, 3], [8, 6, 6, 6]];
        const { which } = hasConsecutiveValues(array);

        expect(which).to.be.equal(3);
    });

    it('should return true even with smaller consecutive values needed', () => {
        const array = [[0, 1, 2, 0], [3, 3, 2, 4], [6, 8, 2, 9]];

        const { areConsecutive, which } = hasConsecutiveValues(array, 2);

        expect(areConsecutive).to.be.true;
        expect(which).to.be.equal(3);
    });

    it('should not consider consecutive values on different chunks', () => {
        const array = [[0, 1, 2, 3], [3, 3, 3, 4], [1, 2, 3, 4]];

        const { areConsecutive } = hasConsecutiveValues(array);

        expect(areConsecutive).to.be.false;
    });
});
