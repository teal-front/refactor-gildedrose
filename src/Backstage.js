import Item from './item'

export class Backstage extends Item {
  constructor(sellIn, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
  }

  updateQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sell_in < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
      if (item.sell_in < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
    item.sell_in = item.sell_in - 1
    if (item.sell_in < 0) {
      item.quality = item.quality - item.quality
    }
  }
}
