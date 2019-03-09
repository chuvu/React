import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, GameScreen } from '../components/index';


const AppContainer = createStackNavigator ({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
  },
  {
    initialRouteName: "Home"
  }
);

export default  createAppContainer(AppContainer);