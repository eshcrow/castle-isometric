'use strict'

import World from './world'

class Game {

  constructor (players) {
    this.world = new World()
    this.players = players
    this.turns = []
  }

}
//
// class Turn {
//
//   constructor (player, phases) {
//     this.player = player
//     this.phases = phases
//     this.currentPhase = phases.first()
//   }
//
//   nextPhase() {
//     this.currentPhase = this.phases.get(this.currentPhase.nextPhase())
//   }
//
//   isTurnOver () {
//     return this.currentPhase === null;
//   }
//
// }
//
// class PlaceTilePhase extends ActionPhase {
//
//   constructor (world, tile) {
//     this.world = world
//     this.tile = tile
//     this.action = null
//   }
//
//   placeTile (position, rotation) {
//     if (this.action) {
//       this.action.undo()
//     }
//     this.action = new PlaceTileAction(this.world, this.tile, position, rotation)
//     this.action.perform()
//   }
//
//   nextPhase () {
//     return PlaceFollowerPhase;
//   }
//
// }
//
// class PlaceTileAction extends Action {
//
//   constructor (world, tile, position, rotation) {
//     this.world = world
//     this.tile = tile
//     this.position = position
//     this.rotation = rotation
//   }
//
//   perform () {
//     world.addTile(this.tile, this.position, this.rotation)
//   }
//
//   undo () {
//     world.removeTile(this.position)
//   }
//
// }
//

export default Game
