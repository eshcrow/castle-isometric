'use strict'

import Position from './position'

function World () {
  this.tiles = {}
  this.remainingTiles = []
}

World.prototype.placeTile = function (tile, position, orientation) {
  if (this.canPlaceTile(tile, position, orientation)) {
    this.tiles[position.toString()] = {
      tile: tile,
      position: position,
      orientation: orientation
    }
  }
}
//
// Orientation: 0
// N0 E1 S2 W3
//
// Orientation: 1
// N3 E0 S1 W2
//
// Orientation: 2
// N2 E1 S0 W1
//
// Orientation: 3
// N1 E2 S3 W0
//

World.prototype.canPlaceTile = function (tile, position, orientation) {
  let world = this

  // console.log('Can place tile?')

  function checkEdge(neighbourPosition, edgeOrientation) {
    let neighbour = world.tiles[neighbourPosition.toString()]
    if (!neighbour) {
      return true;
    }
    let neighbourEdge = neighbour.tile.edges[or(edgeOrientation, neighbour.orientation)]
    let edge = tile.edges[or(edgeOrientation + 2, orientation)]
    return edge.canConnectTo(neighbourEdge)
  }

  return checkEdge(new Position(position.x+1, position.y), 2)
    && checkEdge(new Position(position.x-1, position.y), 0)
    && checkEdge(new Position(position.x, position.y+1), 3)
    && checkEdge(new Position(position.x, position.y-1), 1)
}

function or(orientation, tileOrientation) {
  return (orientation + (4 - tileOrientation)) % 4
}

World.prototype.possiblePlacements = function (tile) {
  let world = this
  let positions = {}
  Object.values(this.tiles).forEach(function (positionedTile) {
    positionedTile.position.neighbours().forEach(function (neighbour) {
      let key = neighbour.toString()
      if (!world.tiles[key] && !positions[key]) {
        let possibleOrientations = []
        let o = [0,1,2,3]
        o.forEach(orientation => {
          if (world.canPlaceTile(tile, neighbour, orientation)) {
            possibleOrientations.push(orientation)
          }
        })
        if (possibleOrientations.length > 0) {
          positions[key] = {
            position: neighbour,
            orientations: possibleOrientations
          }
        }
      }
    })
  })
  positions = Object.values(positions)
  return positions
}

module.exports = World
