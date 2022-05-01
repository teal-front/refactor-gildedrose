import { Backstage } from './Backstage'
import { AgedBrie } from './AgedBrie'
import { Sulfuras } from './Sulfuras'

export class Item {
  name
  sell_in
  quality

  constructor(name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
    return Item.createItem(name, sell_in, quality)
  }

  static createItem(name, sell_in, quality) {
    switch (name) {
      case 'Aged Brie':
        return new AgedBrie(sell_in, quality)
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new Backstage(sell_in, quality)
      case 'Sulfuras, Hand of Ragnaros': // do nothing
        return new Sulfuras(sell_in, quality)
      default:
        return new Item(name, sell_in, quality)
    }
  }

  updateQuality(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
    item.sell_in = item.sell_in - 1
    if (item.sell_in < 0) {
      item.quality = item.quality - item.quality
    }
  }

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }
}
