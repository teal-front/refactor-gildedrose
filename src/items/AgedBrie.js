import Item from './index'

export class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
    }
    this.sell_in = this.sell_in - 1
    if (this.sell_in < 0) {
      if (this.quality < 50) {
        this.quality = this.quality + 1
      }
    }
  }
}
