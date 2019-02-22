import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { getRandomColor, getOtherColor, colors } from '../../../src/connectfour/board/ColorHelper';

describe('ColorHelper', () => {
    describe('getRandomColor', () => {
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.sandbox.create();
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should give the right random color', () => {
            sandbox.stub(Math, 'random').returns(0.3);

            expect(getRandomColor()).to.be.equal(colors.red);
        });

        it('should give the right other random color', () => {
            sandbox.stub(Math, 'random').returns(0.7);

            expect(getRandomColor()).to.be.equal(colors.yellow);
        });
    });

    describe('getOtherColor', () => {
        it('should give the other color when given one', () => {
            const firstColor = getRandomColor();

            expect(firstColor).not.to.be.equal(getOtherColor(firstColor));
        });
    });
});
