'use strict'

var Path = require('./path')

function Shape (paths) {
  this.paths = paths || []
}

/**
 * Translates a given shape
 *
 * Simply a forward to Path#translate
 */
Shape.prototype.translate = function (dx, dy, dz) {
  return new Shape(this.paths.map(function (path) {
    return path.translate(dx, dy, dz)
  }))
}

Shape.prototype.add = function (element) {
  var shape = this
  if (element instanceof Shape) {
    element.paths.map(function (path) {
      shape.add(path)
    })
  } else if (element instanceof Path) {
    shape.paths.push(element)
  }
}

/**
 * Rotates a given shape along the Z axis around a given origin
 *
 * Simply a forward to Path#rotateZ
 */
Shape.prototype.rotateZ = function () {
  var args = arguments
  return new Shape(this.paths.map(function (path) {
    return path.rotateZ.apply(path, args)
  }))
}

Shape.prototype.orderPaths = function () {
  return this.paths.sort(function (pathA, pathB) {
    return pathB.depth() - pathA.depth()
  })
}

module.exports = Shape
