'use strict'

import React from 'react'
import ShapeGraphic from './shapes/shape-graphic'
import Shape2D from './shapes/shape-2d'
import Color from '../isometric/color'
import Point from '../isometric/point'
import Path from '../isometric/path'

const COLOR_LEAVES = new Color(138, 179, 73)
const COLOR_TRUNK = new Color(180, 139, 94)


class Tree extends React.Component {

  render () {
    let trunkShape = new Path([
      new Point(-1, 0),
      new Point(1, 0),
      new Point(1, 3),
      new Point(-1, 3)
    ])
    return (
      <g>
        <Shape2D position={this.props.position} shape={trunkShape} color={COLOR_TRUNK} />
      </g>
    )
  }

}


export default Tree
