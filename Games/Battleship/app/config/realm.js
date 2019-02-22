import Realm from 'realm'

class Game extends Realm.Object {}
Game.schema = {
  name: 'Game',
  primaryKey: 'id',
  properties: {
    id: 'int',
    bestScore: 'int'
  }
}

export default new Realm({
  schema: [
    Game
  ]
})
