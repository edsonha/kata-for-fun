const Shop = require("../src/Shop");

const mockResourceInfo = { Silver: 17, Iron: 195.5 };

let shop;
beforeEach(() => {
  shop = new Shop(mockResourceInfo);
});

describe("Shop", () => {
  describe("Shop instance", () => {
    it("is created from Shop class and has state", () => {
      expect(shop).toBeInstanceOf(Shop);
      expect(shop.state).toEqual({ Silver: 17, Iron: 195.5 });
    });
  });

  describe("calculateTotalPrice", () => {
    test.each([
      ["Silver", 1, 17],
      ["Silver", 5, 85],
      ["Iron", 9, 1759.5],
      ["Iron", 20, 3910],
    ])(
      "should return total price given parameters: resource and price",
      (resource, quantity, total) => {
        expect(shop.calculateTotalPrice(resource, quantity)).toBe(total);
      }
    );
  });
});
