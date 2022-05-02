export default class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sell_in = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
    this.sell_in = this.sell_in - 1
    if (this.sell_in < 0) {
      this.quality = this.quality - this.quality
    }
  }

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }
}
