const { SULFURAS } = require("../constants");

class Sulfuras {
  constructor({ daysRemaining, quality }) {
    this.name = SULFURAS;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  update() {
    return;
  }
}

module.exports = Sulfuras;
