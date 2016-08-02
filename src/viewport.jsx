'use strict'

var React = require('react')

var Viewport = React.createClass({

  getInitialState () {
    return {
      viewBox: { x: -100, y: -100 }
    }
  },

  propTypes: {
    children: React.PropTypes.element
  },

  render () {
    var viewportScalePoints = `${this.state.viewBox.x} ${this.state.viewBox.y} ${this.state.viewBox.x + 100} ${this.state.viewBox.y + 100}`
    return (
      <svg id='world' height='100' width='100' viewBox={this.calculateViewBox()} onMouseMove={this.onMouseMove}>
        <polygon ref='viewportScale' points={viewportScalePoints} />
        {this.props.children}
      </svg>
    )
  },

  onMouseMove (e) {
    if (e.buttons === 1) {
      if (this.lastMousePosition) {
        var r = this.refs.viewportScale.getBoundingClientRect().width / 100
        var dx = e.pageX - this.lastMousePosition.x
        var dy = e.pageY - this.lastMousePosition.y
        this.setState({
          viewBox: {
            x: this.state.viewBox.x - dx / r,
            y: this.state.viewBox.y - dy / r
          }
        })
      }
      this.lastMousePosition = { x: e.pageX, y: e.pageY }
    } else {
      this.lastMousePosition = null
    }
  },

  calculateViewBox () {
    return `${this.state.viewBox.x} ${this.state.viewBox.y} 200 200`
  }

})

module.exports = Viewport
