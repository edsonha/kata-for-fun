class Shop {
  constructor() {
    this.itemPrices = {};
  }

  addItems(items) {
    if (
      typeof items !== "object" ||
      items === null ||
      Object.entries(items).length === 0
    ) {
      throw new Error("addItems: Argument is not valid");
    }
    this.itemPrices = items;
  }

  getPrice(item) {
    if (this.itemPrices[item] === undefined) {
      throw new Error(`getPrice: Unable to get price of ${item}`);
    }
    return this.itemPrices[item];
  }
}

module.exports = Shop;
