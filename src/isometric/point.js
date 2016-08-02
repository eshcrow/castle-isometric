'use strict'

function Point (x, y, z = null) {
  this.x = x
  this.y = y
  this.z = z
}

Point.prototype.clone = function () {
  return new Point(this.x, this.y, this.z)
}

Point.prototype.translate = function (dx, dy, dz) {
  return new Point(this.x + dx, this.y + dy, this.z + dz)
}

Point.prototype.depth = function () {
  return this.x + this.y - 2 * this.z
}

/**
 * Rotate about origin on the Z axis
 */
Point.prototype.rotateZ = function (origin, angle) {
  var p = this.translate(-origin.x, -origin.y, -origin.z);

  var x = p.x * Math.cos(angle) - p.y * Math.sin(angle);
  var y = p.x * Math.sin(angle) + p.y * Math.cos(angle);
  p.x = x;
  p.y = y;

  return p.translate(origin.x, origin.y, origin.z);
}

module.exports = Point
