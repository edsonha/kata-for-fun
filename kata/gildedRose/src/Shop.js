class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      item.update();
    }
    return this.items;
  }
}

module.exports = Shop;
