import Item from './item'

export class Sulfuras extends Item {
  constructor(sellIn, quality) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  updateQuality() {
    // do nothing
  }
}
