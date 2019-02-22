import BoardModel from '../board/BoardModel';
import { getRandomColor, getOtherColor } from '../board/ColorHelper';
import PlayerModel from '../player/PlayerModel';
import Game from './GameModel';

export default class ComputerGame extends Game {
    initializePlayers() {
        const firstPlayerColor = getRandomColor();
        this.player1 = new PlayerModel('Computer', firstPlayerColor, true);
        this.player2 = new PlayerModel('You', getOtherColor(firstPlayerColor));
    }
}
