'use strict'

import React from 'react'
import Viewport from './viewport.jsx'
import World from './world.jsx'
import ControlBar from './control-bar.jsx'

let Game = React.createClass({

  render: function () {
    return (
      <div id='game'>
        <Viewport>
          <World />
        </Viewport>
        <ControlBar />
      </div>
    )
  }

})

export default Game
