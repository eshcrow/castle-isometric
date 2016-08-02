'use strict'

var Vector = require('./vector')

function Path (points, color) {
  this.points = points
  this.color = color
}

Path.prototype.translate = function (dx, dy, dz) {
  return new Path(this.points.map(function (point) {
    return point.translate(dx, dy, dz)
  }), this.color)
}

Path.prototype.reverse = function () {
  var points = Array.prototype.slice.call(this.points)
  return new Path(points.reverse(), this.color)
}

Path.prototype.depth = function () {
  var i = 0
  var total = 0
  for (i = 0; i < this.points.length; i++) {
    total += this.points[i].depth()
  }
  return total / (this.points.length || 1)
}

Path.prototype.isFacing = function (angle) {
  var v1 = Vector.fromTwoPoints(this.points[1], this.points[0])
  var v2 = Vector.fromTwoPoints(this.points[2], this.points[1])

  var normal = Vector.crossProduct(v1, v2).normalize()
  var ratio = Vector.dotProduct(normal, angle)
  return ratio > 0
}

/**
 * Returns a new path rotated along the Z axis by a given origin
 *
 * Simply a forward to Point#rotateZ
 */
Path.prototype.rotateZ = function () {
  var args = arguments
  return new Path(this.points.map(function (point) {
    return point.rotateZ.apply(point, args)
  }), this.color)
}

module.exports = Path
