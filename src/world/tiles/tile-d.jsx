'use strict'

import React from 'react'
import PathGraphic from '../shapes/path-graphic'
import Color from '../../isometric/color'
import Path from '../../isometric/path'
import TileBase from './tile-base'
import Tree from '../tree.jsx'

const COLOR_CITY = new Color(180, 139, 94)
const COLOR_ROAD = new Color(217, 207, 154)
const ROAD_WIDTH = 1.5

class TileD extends TileBase {

  render () {
    let position = this.origin()

    var road = this.buildRoad(position)
    var city = this.buildCity(position)
    var treePosition = this.orientate(position.translate(3, 3, 0))

    return (
      <g>
        {super.render()}
        <Tree position={treePosition} />
        <PathGraphic path={road} zIndex='0'/>
        <PathGraphic path={city} />
      </g>
    )
  }

  buildRoad (position) {
    let halfRoadWidth = ROAD_WIDTH / 2
    let road = new Path([
      position.translate(10, 5 - halfRoadWidth, 0),
      position.translate(10, 5 + halfRoadWidth, 0),
      position.translate(0, 5 + halfRoadWidth, 0),
      position.translate(0, 5 - halfRoadWidth, 0)
    ], COLOR_ROAD)
    return this.orientate(road)
  }

  buildCity (position) {
    let city = new Path([
      position.translate(10, 10, 0),
      position.translate(7.5, 7.5, 0),
      position.translate(2.5, 7.5, 0),
      position.translate(0, 10, 0)
    ], COLOR_CITY)
    return this.orientate(city)
  }

}


export default TileD
