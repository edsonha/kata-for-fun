const Shop = require("../src/Shop");

let shop;
beforeEach(() => {
  shop = new Shop();
});

const mockItems = { Silver: 17, Gold: 14450 };

describe("Shop class", () => {
  describe("Instance", () => {
    it("should create an instance of Shop class", () => {
      expect(shop).toBeInstanceOf(Shop);
    });

    it("should have itemPrices property as an empty object", () => {
      expect(shop.itemPrices).toEqual({});
    });
  });

  describe("addItems method", () => {
    it("should throw an error if items is not an object with key-value pair", () => {
      expect(() => shop.addItems("Silver")).toThrow(
        "addItems: Argument is not valid"
      );
      expect(() => shop.addItems(17)).toThrow(
        "addItems: Argument is not valid"
      );
      expect(() => shop.addItems(true)).toThrow(
        "addItems: Argument is not valid"
      );
      expect(() => shop.addItems(undefined)).toThrow(
        "addItems: Argument is not valid"
      );
      expect(() => shop.addItems(null)).toThrow(
        "addItems: Argument is not valid"
      );
    });

    it("should throw an error if items is an empty array or empty object", () => {
      expect(() => shop.addItems({})).toThrow(
        "addItems: Argument is not valid"
      );
      expect(() => shop.addItems([])).toThrow(
        "addItems: Argument is not valid"
      );
    });

    it("should add items with prices object into itemPrices property", () => {
      shop.addItems(mockItems);
      expect(shop.itemPrices).toEqual({
        Silver: 17,
        Gold: 14450
      });
    });
  });

  describe("getPrice method", () => {
    it("should throw error when item price cannot be found", () => {
      shop.addItems(mockItems);
      expect(() => shop.getPrice("Copper")).toThrow(
        "getPrice: Unable to get price of Copper"
      );
    });

    it("should get price of item", () => {
      shop.addItems(mockItems);
      expect(shop.getPrice("Silver")).toBe(17);
      expect(shop.getPrice("Gold")).toBe(14450);
    });
  });
});
