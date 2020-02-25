const Item = require("../src/Item");
const { AGED_BRIE, SULFURAS, BACKSTAGE_PASS } = require("../src/constants");

function itemAfterUpdate(itemName, daysRemaining, quality) {
  const item = new Item(itemName, daysRemaining, quality);
  item.update();
  return item;
}

describe("Item", () => {
  describe("For regular items", () => {
    it("degrades quality by 2 if it is past its daysRemaining date", () => {
      const itemName = "Regular Item";
      const daysRemaining = 0;
      const quality = 5;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(-1);
      expect(item.quality).toBe(3);
    });

    it("should not degrade quality to less than 0", () => {
      const itemName = "Regular Item";
      const daysRemaining = 5;
      const quality = 0;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(4);
      expect(item.quality).toBe(0);
    });
  });

  describe("For aged brie", () => {
    it("should increase quality the older it gets", () => {
      const itemName = AGED_BRIE;
      const daysRemaining = 5;
      const quality = 0;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(4);
      expect(item.quality).toBe(1);
    });

    it("should not increase quality above 50", () => {
      const itemName = AGED_BRIE;
      const daysRemaining = 5;
      const quality = 50;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(4);
      expect(item.quality).toBe(50);
    });
  });

  describe("For Sulfaras", () => {
    it("should not alter daysRemaining date and quality", () => {
      const itemName = SULFURAS;
      const daysRemaining = 5;
      const quality = 40;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(5);
      expect(item.quality).toBe(40);
    });
  });

  describe("For Backstage Passes", () => {
    it("should increase quality by 1 when daysRemaining date is above 10 days", () => {
      const itemName = BACKSTAGE_PASS;
      const daysRemaining = 15;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(14);
      expect(item.quality).toBe(21);
    });

    it("should increase quality by 2 when daysRemaining date is 6 - 10 days", () => {
      const itemName = BACKSTAGE_PASS;
      const daysRemaining = 10;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(9);
      expect(item.quality).toBe(22);
    });

    it("increases quality by 3 when daysRemaining date is 1 - 5 days", () => {
      const itemName = BACKSTAGE_PASS;
      const daysRemaining = 5;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(4);
      expect(item.quality).toBe(23);
    });

    it("should decrease the quality to 0 when daysRemaining date is 0 days", () => {
      const itemName = BACKSTAGE_PASS;
      const daysRemaining = 0;
      const quality = 20;
      const item = itemAfterUpdate(itemName, daysRemaining, quality);
      expect(item.daysRemaining).toBe(-1);
      expect(item.quality).toBe(0);
    });
  });
});
