'use strict'

import React from 'react'
import ShapeGraphic from '../shapes/shape-graphic'
import Color from '../../isometric/color'
import Point from '../../isometric/point'

const COLOR_GRASS = new Color(138, 179, 73)
const COLOR_DIRT = new Color(180, 139, 94)

const ORIENTATION_ANGLE = (Math.PI / 180) * 90

class TileBase extends React.Component {

  origin () {
    return new Point(10 * this.props.position.x - 5, 10 * this.props.position.y - 5, 0)
  }

  orientate (shape) {
    return shape.rotateZ(this.origin().translate(5, 5, 0), ORIENTATION_ANGLE * this.props.orientation)
  }

  render () {
    let grassPosition = this.origin().translate(0, 0, -1)
    let dirtPosition = this.origin().translate(0, 0, -2)
    return (
      <g>
        <ShapeGraphic position={dirtPosition} dx={10} dy={10} dz={1} color={COLOR_DIRT} zIndex='2' />
        <ShapeGraphic position={grassPosition} dx={10} dy={10} dz={1} color={COLOR_GRASS} zIndex='3' />
      </g>
    )
  }

}


export default TileBase
