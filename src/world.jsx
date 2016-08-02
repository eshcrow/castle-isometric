'use strict'

import React from 'react'
import Tile from './world/tiles/tile'
import TilePlaceholder from './world/tiles/tile-placeholder'
import worldStore from './world-store'

let World = React.createClass({

  getInitialState () {
    return {
      tiles: [],
      possiblePlacements: []
    }
  },

  componentDidMount () {
    this.unsubscribe = worldStore.listen(this.onWorldChange)
  },

  componentWillUnmount () {
    this.unsubscribe()
  },

  onWorldChange (world) {
    let index = 0; //Math.floor(Math.random() * world.remainingTiles.length);
    let tileToPlace = world.remainingTiles[index]

    this.setState({
      tiles: Object.values(world.tiles),
      possiblePlacements: world.possiblePlacements(tileToPlace),
      tileToPlace
    })
  },

  render () {
    let renderedTiles = this.state.tiles.map(placedTile => {
      return {
        depth: this.depth(placedTile.position),
        render: this.renderTile(placedTile)
      }
    })

    let renderedPlaceholders = this.state.possiblePlacements.map(possiblePlacement => {
      return {
        depth: this.depth(possiblePlacement.position),
        render: this.renderPlaceholder(possiblePlacement)
      }
    })

    let renders = renderedTiles.concat(renderedPlaceholders)
      .sort(this.sortByDepth)
      .map(tile => tile.render)

    return (
      <g>
        {renders}
      </g>
    )
  },

  tileKey ({x, y}) {
    return `world.tile-${x}-${y}`
  },

  renderTile ({tile, position, orientation}) {
    return (
      <Tile tile={tile} position={position} orientation={orientation} key={this.tileKey(position)} />
    )
  },

  renderPlaceholder ({tile, position, orientations}) {
    return (
      <TilePlaceholder tile={this.state.tileToPlace} position={position} orientations={orientations} key={this.tileKey(position)} />
    )
  },

  sortByDepth (a, b) {
    const depthA = a.depth
    const depthB = b.depth
    if (depthA < depthB) {
      return 1
    } else if (depthA > depthB) {
      return -1
    } else {
      return 0
    }
  },

  depth ({x, y}) {
    return x + y
  }

})

module.exports = World
