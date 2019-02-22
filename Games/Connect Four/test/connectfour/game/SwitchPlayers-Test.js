import { expect } from 'chai';
import { Chance } from 'chance';

import HumanGameModel from '../../../src/connectfour/game/HumanGameModel';
import switchGamePlayers from '../../../src/connectfour/game/SwitchPlayers';

describe('SwitchPlayers', () => {
    it('should switch players when asked to', () => {
        const chance = new Chance();
        let game = new HumanGameModel(chance.name(), chance.name());

        const firstPlayer = game.currentPlayer;
        game = switchGamePlayers(game);

        expect(game.currentPlayer).not.to.be.equal(firstPlayer);
    });
});
