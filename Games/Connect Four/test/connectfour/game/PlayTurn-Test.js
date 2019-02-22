import { expect } from 'chai';
import { Chance } from 'chance';

import HumanGameModel from '../../../src/connectfour/game/HumanGameModel';
import playTurn from '../../../src/connectfour/game/PlayTurn';

describe('PlayTurn', () => {
    it('should drop the disc on the right column at the right row', () => {
        const chance = new Chance();
        let game = new HumanGameModel(chance.name(), chance.name());

        const firstPlayer = game.currentPlayer;

        game = playTurn(game, 1);

        expect(game.board.cells[1][5]).to.be.equal(firstPlayer.color);
    });

    it('should alternate turns when playing', () => {
        const chance = new Chance();
        let game = new HumanGameModel(chance.name(), chance.name());

        const firstPlayer = game.currentPlayer;

        game = playTurn(game, 1);

        expect(firstPlayer).not.to.be.equal(game.currentPlayer);
    });
});
