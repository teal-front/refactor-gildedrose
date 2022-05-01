import Item from './item'

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super('Aged Brie', sellIn, quality)
  }

  updateQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sell_in = item.sell_in - 1
    if (item.sell_in < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }
}
