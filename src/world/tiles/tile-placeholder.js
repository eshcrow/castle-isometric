 'use strict'

var React = require('react')
import actions from '../../actions'
import placeTilePhaseStore from '../../place-tile-phase-store'
import Tile from './tile'

var OPACITY_HIDE = 0
var OPACITY_SHOW = 1

class TilePlaceholder extends React.Component {

  constructor (props) {
    super(props)

    this.placeTile = this.placeTile.bind(this)
    this.rotate = this.rotate.bind(this)

    this.state = {
      orientationIndex: 0
    }
  }

  componentDidMount () {
    this.unsubscribe = placeTilePhaseStore.listen(this.onPlaceTilePhaseChanged.bind(this))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onPlaceTilePhaseChanged ({position}) {
    this.setState({
      isActive: this.props.position.equals(position)
    })
  }

  render () {
    var classNames = ['placeholder']
    if (this.state.isActive) {
      classNames.push('active')
    }
    return (
      <g className={classNames} onClick={this.placeTile} onContextMenu={this.rotate}>
        <Tile tile={this.props.tile} position={this.props.position} orientation={this.selectedOrientation()} />
      </g>
    )
  }

  selectedOrientation() {
    let index = this.state.orientationIndex % this.props.orientations.length
    return this.props.orientations[index]
  }

  placeTile () {
    actions.placeTile(this.props.tile, this.props.position, this.selectedOrientation())
  }

  rotate (e) {
    e.preventDefault();

    this.setState({
      orientationIndex: this.state.orientationIndex + 1
    })
  }

}

module.exports = TilePlaceholder
