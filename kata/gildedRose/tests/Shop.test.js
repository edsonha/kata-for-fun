const Shop = require("../src/Shop");
const Item = require("../src/Item");
const { AGED_BRIE, BACKSTAGE_PASS, SULFURAS } = require("../src/constants");

describe("Shop", () => {
  it("should create an empty list of items when no items are provided", () => {
    const shop = new Shop();
    expect(shop.items).toEqual([]);
  });

  it("should update items correctly", () => {
    const items = [
      new Item("Regular Item", 0, 0),
      new Item(AGED_BRIE, 0, 0),
      new Item(BACKSTAGE_PASS, 0, 0),
      new Item(SULFURAS, 0, 0)
    ];
    const shop = new Shop(items);
    shop.updateQuality();

    expect(shop.items[0].name).toBe("Regular Item");
    expect(shop.items[0].daysRemaining).toBe(-1);
    expect(shop.items[0].quality).toBe(0);

    expect(shop.items[1].name).toBe("Aged Brie");
    expect(shop.items[1].daysRemaining).toBe(-1);
    expect(shop.items[1].quality).toBe(1);

    expect(shop.items[2].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(shop.items[2].daysRemaining).toBe(-1);
    expect(shop.items[2].quality).toBe(0);

    expect(shop.items[3].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(shop.items[3].daysRemaining).toBe(0);
    expect(shop.items[3].quality).toBe(0);
  });
});
