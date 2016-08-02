'use strict'

import TileEdge from './tile-edge.js'
import CitySection from './city-section.js'
import FarmSection from './farm-section.js'
import RoadSection from './road-section'

class Tile {

  constructor({type, edges, sections}) {
    this.type = type
    this.edges = edges
    this.sections = sections
  }

}

function buildTileD () {
  let cityA = new CitySection()
  let farmA = new FarmSection()
  let farmB = new FarmSection()
  let roadA = new RoadSection()

  let edgeN = new TileEdge(farmA, roadA, farmB)
  let edgeE = new TileEdge(cityA)
  let edgeS = new TileEdge(farmB, roadA, farmA)
  let edgeW = new TileEdge(farmA)

  let tile = new Tile({
    type: 'D',
    edges: [edgeN, edgeE, edgeS, edgeW]
  })

  return tile
}

function buildTileV () {
  let farmA = new FarmSection()
  let farmB = new FarmSection()
  let roadA = new RoadSection()

  let edgeN = new TileEdge(farmA)
  let edgeE = new TileEdge(farmA)
  let edgeS = new TileEdge(farmA, roadA, farmB)
  let edgeW = new TileEdge(farmB, roadA, farmA)

  let tile = new Tile({
    type: 'V',
    edges: [edgeN, edgeE, edgeS, edgeW]
  })

  return tile
}

export default Tile
export { buildTileD, buildTileV }
