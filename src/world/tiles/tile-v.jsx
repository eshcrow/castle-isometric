'use strict'

import React from 'react'
import ShapeGraphic from '../shapes/shape-graphic'
import PathGraphic from '../shapes/path-graphic'
import Color from '../../isometric/color'
import Point from '../../isometric/point'
import Path from '../../isometric/path'

const COLOR_GRASS = new Color(138, 179, 73)
const COLOR_DIRT = new Color(180, 139, 94)
const COLOR_CITY = new Color(180, 139, 94)
const COLOR_ROAD = new Color(217, 207, 154)
const DEG_TO_RAD = Math.PI / 180

const ROAD_WIDTH = 1.5

const TileV = React.createClass({

  render: function () {
    var position = new Point(10 * this.props.position.x - 5, 10 * this.props.position.y - 5, 0)
    let center = position.translate(5, 5, 0)

    var grassPosition = position.translate(0, 0, -1)
    var dirtPosition = position.translate(0, 0, -2)

    const halfRoadWidth = ROAD_WIDTH / 2

    var road = new Path([
      position.translate(0, 5 + halfRoadWidth, 0),
      position.translate(5 + halfRoadWidth, 5 + halfRoadWidth, 0),
      position.translate(5 + halfRoadWidth, 0, 0),
      position.translate(5 - halfRoadWidth, 0, 0),
      position.translate(5 - halfRoadWidth, 5 - halfRoadWidth, 0),
      position.translate(0, 5 - halfRoadWidth, 0),
    ], COLOR_ROAD)

    var rotation = DEG_TO_RAD * (this.props.orientation || 0) * 90

    road = road.rotateZ(position.translate(5,5,0), rotation)

    return (
      <g>
        <ShapeGraphic position={dirtPosition} dx={10} dy={10} dz={1} color={COLOR_DIRT} />
        <ShapeGraphic position={grassPosition} dx={10} dy={10} dz={1} color={COLOR_GRASS} />
        <PathGraphic path={road} />
      </g>
    )
  }

})


export default TileV
