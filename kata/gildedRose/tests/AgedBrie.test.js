const { AgedBrie } = require("../src/types");

describe("Aged Brie", () => {
  it("has correct item name", () => {
    const item = new AgedBrie({});
    expect(item.name).toBe("Aged Brie");
  });

  it("increases quality the older it gets", () => {
    const item = new AgedBrie({ daysRemaining: 5, quality: 0 });
    item.update();
    expect(item.quality).toBe(1);
  });

  it("decreases days remaining by 1", () => {
    const item = new AgedBrie({ daysRemaining: 5, quality: 50 });
    item.update();
    expect(item.daysRemaining).toBe(4);
  });

  it("should not increase quality above 50", () => {
    const item = new AgedBrie({ daysRemaining: 5, quality: 50 });
    item.update();
    expect(item.quality).toBe(50);
  });
});
