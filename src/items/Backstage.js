import Item from './index'

export class Backstage extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1
      if (this.sell_in < 11) {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
      if (this.sell_in < 6) {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
    this.sell_in = this.sell_in - 1
    if (this.sell_in < 0) {
      this.quality = this.quality - this.quality
    }
  }
}
