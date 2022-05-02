import { Backstage } from './items/Backstage'
import { AgedBrie } from './items/AgedBrie'
import { Sulfuras } from './items/Sulfuras'
import DefaultItem from './items'

function createItem(name, sell_in, quality) {
  switch (name) {
    case 'Aged Brie':
      return new AgedBrie(name, sell_in, quality)
    case 'Backstage passes to a TAFKAL80ETC concert':
      return new Backstage(name, sell_in, quality)
    case 'Sulfuras, Hand of Ragnaros':
      return new Sulfuras(name, sell_in, quality)
    default:
      return new DefaultItem(name, sell_in, quality)
  }
}

export class Item {
  // name
  // sell_in
  // quality

  constructor(name, sell_in, quality) {
    return createItem(name, sell_in, quality)
  }

  // updateQuality(item) {
  //   if (item.quality > 0) {
  //     item.quality = item.quality - 1
  //   }
  //   item.sell_in = item.sell_in - 1
  //   if (item.sell_in < 0) {
  //     item.quality = item.quality - item.quality
  //   }
  // }
  //
  // toString() {
  //   return `${this.name}, ${this.sell_in}, ${this.quality}`
  // }
}
