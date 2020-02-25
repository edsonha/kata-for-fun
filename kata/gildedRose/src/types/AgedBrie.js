const { AGED_BRIE } = require("../constants");

class AgedBrie {
  constructor({ daysRemaining, quality }) {
    this.name = AGED_BRIE;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  update() {
    this.daysRemaining = this.daysRemaining - 1;
    this.quality = Math.min(this.quality + 1, 50);
  }
}

module.exports = AgedBrie;
