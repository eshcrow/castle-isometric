'use strict'

import Reflux from 'reflux'
import actions from './actions'
import {buildTileD, buildTileV} from './game/tile'
import Game from './game/game'
import Position from './game/position'

var worldStore = Reflux.createStore({

  init () {
    this.game = new Game()
    this.game.world.remainingTiles.push(buildTileD())
    this.game.world.remainingTiles.push(buildTileV())
    this.listenTo(actions.placeTile, this.placeTile)
    this.listenTo(actions.load, this.load)
  },

  load () {
    this.game.world.placeTile(buildTileD(), new Position(0, 0), 0)
    this.update()
  },

  placeTile (tile, position, orientation) {
    // this.game.world.placeTile(tile, position, orientation)
    this.update()
  },

  update () {
    this.trigger(this.game.world)
  }

})

module.exports = worldStore
