import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Board from '../../../src/connectfour/board/Board';
import Cell from '../../../src/connectfour/board/Cell';
import ControlButton from '../../../src/connectfour/board/ControlButton';
import BoardModel from '../../../src/connectfour/board/BoardModel';

describe('<Board />', () => {
    let dropDiscCallback;

    beforeEach(() => {
        dropDiscCallback = sinon.spy();
    });

    it('should render the right amount of columns', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.closest(View).props().children.length).to.equal(2);
    });

    it('should render the right amount of cells', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.find(Cell).length).to.equal(4);
    });

    it('should render as many buttons as columns', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        expect(board.find(ControlButton).length).to.equal(2);
    });

    it('should call drop disc when I click on the action button', () => {
        const boardModel = new BoardModel(2, 2);
        const board = shallow(<Board board={boardModel} dropDisc={dropDiscCallback} />);

        board.find(ControlButton).first().simulate('press');
        expect(dropDiscCallback.called).to.be.true;

        board.find(ControlButton).first().simulate('press');
        expect(dropDiscCallback.calledTwice).to.be.true;
    });
});
