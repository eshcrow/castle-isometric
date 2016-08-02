var React = require('react')

import TileD from './tile-d.jsx'
import TileV from './tile-v.jsx'

var tileTypes = {
  D: TileD,
  V: TileV
}

var Tile = React.createClass({

  render () {
    var TileType = tileTypes[this.props.tile.type]
    return (
      <TileType tile={this.props.tile} position={this.props.position} orientation={this.props.orientation}/>
    )
  }

})

module.exports = Tile
