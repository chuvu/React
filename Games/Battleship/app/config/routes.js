import { StackNavigator } from 'react-navigation'

import MainMenu from '../screens/MainMenu'
import Game from '../screens/Game'
import GameOver from '../screens/GameOver'

export default StackNavigator({
  MainMenu: {screen: MainMenu},
  Game: {screen: Game},
  GameOver: {screen: GameOver}
})
