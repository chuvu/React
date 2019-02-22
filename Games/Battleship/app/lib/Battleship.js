const posToIJ = (str) => {
  if (str.length <= 0)
    return false

  let split = str.split('')
  let i
  let j = split[0].charCodeAt(0) - 65

  if (str.length == 2)
    i = Number(split[1]) - 1
  else if (str.length == 3)
    i = Number(split[1] + '' + split[2]) - 1
  else
    return false

  if (isNaN(i) || i >= this.size || j >= this.size || i < 0 || j < 0)
    return false

  return [i, j]
}

export default class Battleship {

  static getShips() {
    const gameSize = 10
    const gameShipList = [{
      name: 'Carrier',
      size: 5
    }, {
      name: 'Battleship',
      size: 4
    }, {
      name: 'Cruiser',
      size: 3
    }, {
      name: 'Submarine',
      size: 3
    }, {
      name: 'Destroyer',
      size: 2
    }]

    let filledPos = []

    for (let shipCount = 0; shipCount < gameShipList.length; shipCount++) {
      let ship = gameShipList[shipCount]

      let randI = Math.floor(Math.random() * gameSize) + 1
      let randJ = Math.floor(Math.random() * gameSize)

      ship.point = []
      ship.orientation = Math.floor(Math.random() * 2) //0 for portrait, 1 for landscape
      ship.condition = true

      for (let shipPoint = 0; shipPoint < ship.size; shipPoint++) {
        let strPos = String.fromCharCode(randJ + 65) + randI

        if (
          filledPos.indexOf(strPos) < 0 &&
          randI < gameSize &&
          randJ < gameSize
        ) {
          filledPos.push(strPos)
          ship.point.push({
            shipIndex: shipCount,
            shipPointIndex: shipPoint,
            pos: strPos,
            condition: true
          })

          if (ship.orientation)
            randJ++
          else
            randI++
        } else {
          ship.point = []
          if (shipCount > 0) {
            filledPos.splice(filledPos.length - shipCount, shipCount)
            shipCount -= 2
          } else {
            filledPos = []
            shipCount = -1
          }

          break
        }
      }
    }

    return gameShipList
  }

  static generateBoard(ships)  {
    const gameSize = 10
    let result = []

    for (let i = 0; i < gameSize; i++) {
      result.push([])
      for (let j = 0; j < gameSize; j++)
        result[i].push({
          haveShip: false,
          condition: true
        })
    }

    ships.forEach(ship => {
      ship.point.forEach(tile => {
        let ij = posToIJ(tile.pos)
        result[ij[0]][ij[1]].haveShip = tile
      })
    })

    return result
  }
}
