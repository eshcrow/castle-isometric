'use strict'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game.jsx'
import actions from './actions'

ReactDOM.render(
  <Game />,
  document.getElementById('castle-app')
)

actions.load()
