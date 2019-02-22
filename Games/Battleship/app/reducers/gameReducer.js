const defaultValue = {
  board: [[]],
  ships: [],
  moves: 0,
  gameOver: false
}

export default (state = defaultValue, action) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return {
        ...state,
        ...action.payload
      }

    case 'GUESS':
      let newBoard = [...state.board]
      let newShips = [...state.ships]

      let nowSquare = newBoard[action.payload.i][action.payload.j]
      nowSquare.condition = false
      if (nowSquare.haveShip) {
        nowSquare.haveShip.condition = false

        let nowShip = newShips[nowSquare.haveShip.shipIndex]
        let nowPoint = nowShip.point[nowSquare.haveShip.shipPointIndex]
        nowPoint.condition = false

        if (nowShip.point.reduce((sum, next) => sum + next.condition, 0) == 0)
          nowShip.condition = false
      }

      return {
        ...state,
        board: newBoard,
        ships: newShips,
        moves: ++state.moves,
        gameOver: newShips.filter(ship => ship.condition).length == 0
      }

    default:
      return state
  }
}
