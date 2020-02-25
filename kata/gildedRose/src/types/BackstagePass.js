const { BACKSTAGE_PASS } = require("../constants");

class BackstagePass {
  constructor({ daysRemaining, quality }) {
    this.name = BACKSTAGE_PASS;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
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

module.exports = BackstagePass;
