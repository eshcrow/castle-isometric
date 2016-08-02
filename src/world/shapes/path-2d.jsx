'use strict'

var React = require('react')
var PathGraphic = require('./path-graphic')
var cuboidShape = require('../../isometric/cuboid')
var light = require('../../isometric/light')
var Color = require('../../isometric/color')
var Point = require('../../isometric/point')
var Vector = require('../../isometric/vector')

class Path2D extends React.Component {

  render () {
    return (
      <g>
        {paths.map(function (path, index) {
          var style = {
            fill: light({points: path.points}, color).toHex()
          }
          return (
            <PathGraphic key={index} path={path} style={style} zIndex={zIndex} />
          )
        })}
      </g>
    )
  }

})

export default Path2D


var angle = Math.PI / 6
var scale = 2
var transformation = [
  [
    Math.cos(angle),
    Math.sin(angle)
  ],
  [
    Math.cos(Math.PI - angle),
    Math.sin(Math.PI - angle)
  ]
]

var PathGraphic = React.createClass({

  render: function () {
    var style = this.props.style || {}
    if (this.props.path.color) {
      style.fill = style.fill || this.props.path.color.toHex()
    }
    var points = this.props.path.points.map(function (point) {
      var screenPoint = translatePoint(point)
      return screenPoint.x + ' ' + screenPoint.y
    }).join(',')
    return (
      <polygon points={points} style={style} zIndex={this.props.zIndex} />
    )
  }

})

function translatePoint (point) {
  // point = point.rotateZ({x: 0, y: 0, z: 0}, (Math.PI / 180) * 10)
  /**
   * X rides along the angle extended from the origin
   * Y rides perpendicular to this angle (in isometric view: PI - angle)
   * Z affects the y coordinate of the drawn point
   */
  var xMap = new Point(point.x * scale * transformation[0][0],
                       point.x * scale * transformation[0][1])

  var yMap = new Point(point.y * scale * transformation[1][0],
                       point.y * scale * transformation[1][1])

  var x = 0 + xMap.x + yMap.x
  var y = 0 - xMap.y - yMap.y - (point.z * scale)
  return new Point(x, y)
}

module.exports = PathGraphic
