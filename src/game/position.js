'use strict'

class Position {

  constructor (x, y) {
    this.x = x
    this.y = y
  }

  equals (position) {
    return this.x === position.x && this.y === position.y
  }

  toString () {
    return `(${this.x},${this.y})`
  }

  neighbours () {
    return [
      new Position(this.x, this.y - 1),
      new Position(this.x, this.y + 1),
      new Position(this.x - 1, this.y),
      new Position(this.x + 1, this.y),
    ]
  }

}

export default Position
