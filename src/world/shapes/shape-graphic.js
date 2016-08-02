var React = require('react')
var PathGraphic = require('./path-graphic')
var cuboidShape = require('../../isometric/cuboid')
var light = require('../../isometric/light')
var Color = require('../../isometric/color')
var Point = require('../../isometric/point')
var Vector = require('../../isometric/vector')

var ShapeGraphic = React.createClass({

  propTypes: {
    position: React.PropTypes.instanceOf(Point).isRequired,
    dx: React.PropTypes.number.isRequired,
    dy: React.PropTypes.number.isRequired,
    dz: React.PropTypes.number.isRequired,
    color: React.PropTypes.instanceOf(Color)
  },

  render: function () {
    var shape = cuboidShape({
      origin: this.props.position,
      dx: this.props.dx,
      dy: this.props.dy,
      dz: this.props.dz
    })
    var color = this.props.color

    var paths = shape.paths.filter(function (path) { return path.isFacing(new Vector(-2, -1, 3)) })

    var zIndex = this.props.zIndex

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

module.exports = ShapeGraphic
