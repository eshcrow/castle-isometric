'use strict'

import React from 'react'

class ControlBar extends React.Component {

  render () {
    return (
      <div id='control-bar'>

        <button onClick={this.proceed}>Proceed</button>
        <button onClick={this.undo}>Undo</button>

      </div>
    )
  }

  proceed () {
    console.log('proceed')
  }

  undo () {
    console.log('undo')

  }

}

export default ControlBar
