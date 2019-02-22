import Battleship from '../lib/Battleship'

export const SET_GAME_STATE = () => {
  const ships = Battleship.getShips()
  const board = Battleship.generateBoard(ships)

  return {
    type: 'SET_GAME_STATE',
    payload: {
      board,
      ships,
      moves: 0,
      gameOver: false
    }
  }
}

export const GUESS = (i, j) => ({
  type: 'GUESS',
  payload: {
    i, j
  }
})
