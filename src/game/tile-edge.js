'use strict'

class TileEdge {

  constructor (...sections) {
    this.sections = sections
  }

  canConnectTo (otherTileEdge) {
    if (this.sections.length !== otherTileEdge.sections.length) {
      return false
    }
    return this.sections.reverse().every((section, index) => {
      return section.type === otherTileEdge.sections[index].type
    })
  }

}

module.exports = TileEdge
