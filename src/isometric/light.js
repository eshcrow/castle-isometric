'use strict'

var Color = require('./color.js')
var Vector = require('./vector.js')

function determineColor (path, baseColor) {
  baseColor = baseColor || new Color(120, 120, 120)

  var lightPosition = new Vector(-2, -1, 3)
  var lightAngle = lightPosition.normalize()

  /* Compute color */
  var v1 = Vector.fromTwoPoints(path.points[1], path.points[0])
  var v2 = Vector.fromTwoPoints(path.points[2], path.points[1])

  var normal = Vector.crossProduct(v1, v2).normalize()

  var colorDifference = 0.33
  var lightColor = new Color(255, 255, 255)

  /**
   * Brightness is between -1 and 1 and is computed based
   * on the dot product between the light source vector and normal.
   */
  var brightness = (Vector.dotProduct(normal, lightAngle) - 0.8) / 2
  var color = baseColor.lighten((brightness) * colorDifference, lightColor)
  return color
}

module.exports = determineColor
