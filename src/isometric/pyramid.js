'use strict'

var Path = require('./path')
var Shape = require('./shape')

function Pyramid (options) {
  var origin = options.origin
  var dx = options.dx
  var dy = options.dy
  var top = options.top
  var color = options.color

  var face1 = new Path([
    origin,
    origin.translate(dx, 0, 0),
    top
  ], color)

  var face2 = new Path([
    origin,
    origin.translate(0, dy, 0),
    top
  ], color)

  var face3 = new Path([
    origin.translate(dx, 0, 0),
    origin.translate(dx, dy, 0),
    top
  ], color)

  var face4 = new Path([
    origin.translate(0, dy, 0),
    origin.translate(dx, dy, 0),
    top
  ], color)

  var face5 = new Path([
    origin,
    origin.translate(dx, 0, 0),
    origin.translate(dx, dy, 0),
    origin.translate(0, dy, 0)
  ], color)

  var shape = new Shape()
  shape.add(face1)
  shape.add(face2.reverse())
  shape.add(face3)
  shape.add(face4.reverse())
  shape.add(face5)

  shape.orderPaths()

  return shape
}

module.exports = Pyramid
