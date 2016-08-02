'use strict'

import Reflux from 'reflux'
import actions from './actions'
import Game from './game/game'
import Position from './game/position'

var turnStore = Reflux.createStore({

  init () {
    this.listenTo(actions.commitPhase, this.commitPhase)
  },

  commitPhase () {
    this.trigger(this.currentTurn)
  }

})

module.exports = worldStore
