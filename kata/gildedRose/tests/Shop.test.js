const Shop = require("../src/Shop");
const {
  RegularItem,
  AgedBrie,
  Sulfuras,
  BackstagePass
} = require("../src/Item");

describe("Shop", () => {
  it("should create an empty list of items when no items are provided", () => {
    const shop = new Shop();
    expect(shop.items).toEqual([]);
  });

  it("should update items correctly", () => {
    const items = [
      new RegularItem("Random Item", 0, 0),
      new AgedBrie(0, 0),
      new BackstagePass(0, 0),
      new Sulfuras(0, 0)
    ];
    const shop = new Shop(items);
    shop.updateQuality();

    expect(shop.items[0].name).toBe("Random Item");
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
