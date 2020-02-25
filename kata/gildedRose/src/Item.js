const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("./constants");

class Item {
  constructor(daysRemaining, quality) {
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }
}

class RegularItem extends Item {
  constructor(name, daysRemaining, quality) {
    super(daysRemaining, quality);
    this.name = name;
  }

  update() {
    this.daysRemaining = this.daysRemaining - 1;
    if (this.daysRemaining < 1) {
      this.quality = Math.max(this.quality - 2, 0);
      return;
    }
    this.quality = Math.max(this.quality - 1, 0);
  }
}

class AgedBrie extends Item {
  constructor(daysRemaining, quality) {
    super(daysRemaining, quality);
    this.name = AGED_BRIE;
  }

  update() {
    this.daysRemaining = this.daysRemaining - 1;
    this.quality = Math.min(this.quality + 1, 50);
  }
}

class Sulfuras extends Item {
  constructor(daysRemaining, quality) {
    super(daysRemaining, quality);
    this.name = SULFURAS;
  }

  update() {
    return;
  }
}

class BackstagePass extends Item {
  constructor(daysRemaining, quality) {
    super(daysRemaining, quality);
    this.name = BACKSTAGE_PASS;
  }

  update() {
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
}

function createItem(name, daysRemaining, quality) {
  switch (name) {
    case AGED_BRIE:
      return new AgedBrie(daysRemaining, quality);
    case BACKSTAGE_PASS:
      return new BackstagePass(daysRemaining, quality);
    case SULFURAS:
      return new Sulfuras(daysRemaining, quality);
    default:
      return new RegularItem(name, daysRemaining, quality);
  }
}

module.exports = {
  createItem,
  RegularItem,
  AgedBrie,
  Sulfuras,
  BackstagePass
};
