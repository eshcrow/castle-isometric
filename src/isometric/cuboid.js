'use strict'

var Path = require('./path')
var Shape = require('./shape')

function Cuboid (options) {
  var origin = options.origin
  var dx = options.dx
  var dy = options.dy
  var dz = options.dz
  var color = options.color

  var face1 = new Path([
    origin,
    origin.translate(dx, 0, 0),
    origin.translate(dx, 0, dz),
    origin.translate(0, 0, dz)
  ], color)

  var face2 = new Path([
    origin,
    origin.translate(0, 0, dz),
    origin.translate(0, dy, dz),
    origin.translate(0, dy, 0)
  ], color)

  var face3 = new Path([
    origin,
    origin.translate(dx, 0, 0),
    origin.translate(dx, dy, 0),
    origin.translate(0, dy, 0)
  ], color)

  var shape = new Shape()
  shape.add(face1)
  shape.add(face1.reverse().translate(0, dy, 0))
  shape.add(face2.reverse().translate(dx, 0, 0))
  shape.add(face2)
  shape.add(face3.reverse())
  shape.add(face3.translate(0, 0, dz))
  shape.orderPaths()
  return shape
}

module.exports = Cuboid
