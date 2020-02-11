const { calculatePrice } = require("../src/utils");

describe("Calculate Price", () => {
  describe("Irregular input", () => {
    const errMsg = "Calculate Price: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => calculatePrice()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => calculatePrice(8)).toThrow(errMsg);
    });
    it("should throw an error when input is undefined", () => {
      expect(() => calculatePrice(undefined)).toThrow(errMsg);
    });
    it("should throw an error when input is null", () => {
      expect(() => calculatePrice(null)).toThrow(errMsg);
    });
    it("should throw an error when input is empty object", () => {
      expect(() => calculatePrice({})).toThrow(errMsg);
    });
    it("should throw an error when input is boolean", () => {
      expect(() => calculatePrice(true)).toThrow(errMsg);
    });
    it("should throw an error when input is a string", () => {
      expect(() => calculatePrice("hello")).toThrow(errMsg);
    });
  });

  const mockData = [
    ["glob glob", "Silver", "34"],
    ["glob prok", "Gold", "57800"]
  ];

  describe("Output", () => {
    it("should return an object", () => {
      expect(typeof calculatePrice([]) === "object").toBe(true);
    });

    it("should return an empty object when input is empty array", () => {
      expect(calculatePrice([])).toEqual({});
    });

    it("should throw an error when data array has invalid data", () => {
      const errMsg = "Calculate Price: Data is not valid";
      expect(() => calculatePrice([8])).toThrow(errMsg);
      expect(() => calculatePrice([null])).toThrow(errMsg);
      expect(() => calculatePrice([undefined])).toThrow(errMsg);
      expect(() => calculatePrice([true])).toThrow(errMsg);
      expect(() => calculatePrice([{}])).toThrow(errMsg);
      expect(() => calculatePrice([""])).toThrow(errMsg);
    });

    // it("should return an object with item name and price in number", () => {
    //   expect(calculatePrice(mockData)).toEqual({
    //     Silver: 17,
    //     Gold: 14450
    //   });
    // });
  });
});
