class Shop {
  constructor(resourceInfo) {
    this.state = resourceInfo;
  }

  calculateTotalPrice(resource, quantity) {
    return quantity * this.state[resource];
  }
}

module.exports = Shop;
