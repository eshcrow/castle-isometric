'use strict'

import Reflux from 'reflux'
import actions from './actions'
import Game from './game/game'

var placeTilePhaseStore = Reflux.createStore({

  init () {
    this.listenTo(actions.placeTile, this.placeTile)
  },

  placeTile (tile, position, orientation) {
    this.trigger({
      tile,
      position,
      orientation
    })
  }

})

module.exports = placeTilePhaseStore
