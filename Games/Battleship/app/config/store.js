import { createStore, combineReducers } from 'redux'

import nav from '../reducers/navReducer'
import game from '../reducers/gameReducer'

export default createStore(combineReducers({
  nav,
  game
}))
