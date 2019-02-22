import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from '../../../src/chrome/Button';
import ControlButton from '../../../src/connectfour/board/ControlButton';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('<ControlButton />', () => {
    let dropDiscCallback;

    beforeEach(() => {
        dropDiscCallback = sinon.spy();
    });

    it('should make action button disappear disabled', () => {
        const controlButton = shallow(<ControlButton onPress={dropDiscCallback} column={0} enabled />);

        expect(controlButton.find(Button).length).to.be.equal(1);

        const disabledControlButton = shallow(<ControlButton onPress={dropDiscCallback} column={0} enabled={false} />);

        expect(disabledControlButton.find(Button).length).to.be.equal(0);
    });

    it('should call the method with the right arguments when clicked', () => {
        const boardModel = new BoardModel(2, 2);
        const controlButton = shallow(<ControlButton board={boardModel} onPress={dropDiscCallback} column={0} />);

        controlButton.find(Button).simulate('press');

        expect(dropDiscCallback.called).to.be.true;
        expect(dropDiscCallback.args[0][0]).to.be.equal(0);
    });

    it('should not do anything on click if disabled', () => {
        const controlButton = shallow(<ControlButton enabled={false} onPress={dropDiscCallback} column={0} />);

        controlButton.simulate('press');

        expect(dropDiscCallback.called).to.be.false;
    });
});
