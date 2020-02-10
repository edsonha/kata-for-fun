const { extractResourcePriceData } = require("../src/utils");

describe("Extract Resource Price Data", () => {
  describe("Irregular input", () => {
    const errMsg = "Extract resource price data: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => extractResourcePriceData()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => extractResourcePriceData(8)).toThrow(errMsg);
    });

    it("should throw an error when input is undefined", () => {
      expect(() => extractResourcePriceData(undefined)).toThrow(errMsg);
    });

    it("should throw an error when input is null", () => {
      expect(() => extractResourcePriceData(null)).toThrow(errMsg);
    });

    it("should throw an error when input is empty object", () => {
      expect(() => extractResourcePriceData({})).toThrow(errMsg);
    });

    it("should throw an error when input is boolean", () => {
      expect(() => extractResourcePriceData(true)).toThrow(errMsg);
    });

    it("should throw an error when input is a string", () => {
      expect(() => extractResourcePriceData("hello")).toThrow(errMsg);
    });
  });

  const mockResourcePriceData = [
    "glob glob Silver is 34 Credits",
    "glob prok Gold is 57800 Credits"
  ];

  describe("Output", () => {
    it("should return an array", () => {
      expect(Array.isArray(extractResourcePriceData([]))).toBe(true);
    });

    it("should return an empty object when input is empty", () => {
      expect(extractResourcePriceData([])).toEqual([]);
    });

    it("should throw an error when input array has invalid statements", () => {
      const errMsg = "Extract resource price data: Statement is not valid";
      expect(() => extractResourcePriceData([8])).toThrow(errMsg);
      expect(() => extractResourcePriceData([null])).toThrow(errMsg);
      expect(() => extractResourcePriceData([undefined])).toThrow(errMsg);
      expect(() => extractResourcePriceData([true])).toThrow(errMsg);
      expect(() => extractResourcePriceData([{}])).toThrow(errMsg);
      expect(() => extractResourcePriceData([""])).toThrow(errMsg);
    });

    it("should throw an error when statement in input array does not contain ' is '", () => {
      const errMsg = "Extract resource price data: Statement is not valid";
      expect(() => extractResourcePriceData(["hello there"])).toThrow(errMsg);
    });

    it("should throw an error when statement in input array does not end with 'credits", () => {
      const errMsg = "Extract resource price data: Statement is not valid";
      expect(() => {
        extractResourcePriceData(["credi"]);
      }).toThrow(errMsg);
    });

    it("should return an array with arrays of length 3", () => {
      const output = extractResourcePriceData(mockResourcePriceData);
      expect(output[0].length).toBe(3);
    });

    it("should return an array of arrays with galactic numeral, item name and price in order", () => {
      expect(extractResourcePriceData(mockResourcePriceData)).toEqual([
        ["glob glob", "Silver", "34"],
        ["glob prok", "Gold", "57800"]
      ]);
    });
  });
});
