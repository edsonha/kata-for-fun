const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");

class Item {
  constructor(name, daysRemaining, quality) {
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  update() {
    if (this.name === "Regular Item") {
      this.daysRemaining = this.daysRemaining - 1;
      if (this.daysRemaining < 1) {
        this.quality = Math.max(this.quality - 2, 0);
        return;
      }
      this.quality = Math.max(this.quality - 1, 0);
    }

    if (this.name === AGED_BRIE) {
      this.daysRemaining = this.daysRemaining - 1;
      this.quality = Math.min(this.quality + 1, 50);
    }

    if (this.name === BACKSTAGE_PASS) {
      this.daysRemaining = this.daysRemaining - 1;
      if (this.daysRemaining <= 10 && this.daysRemaining >= 6) {
        this.quality = this.quality + 2;
        return;
      }
      if (this.daysRemaining <= 5 && this.daysRemaining >= 1) {
        this.quality = this.quality + 3;
        return;
      }
      if (this.daysRemaining <= 0) {
        this.quality = 0;
        return;
      }
      this.quality = this.quality + 1;
    }

    if (this.name === SULFURAS) {
      return;
    }
  }
}

module.exports = Item;
