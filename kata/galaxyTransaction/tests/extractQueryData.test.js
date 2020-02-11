const { extractQueryData } = require("../src/utils");

describe("Extract Query Data", () => {
  describe("Irregular input", () => {
    const errMsg = "Extract query data: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => extractQueryData()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => extractQueryData(8)).toThrow(errMsg);
    });

    it("should throw an error when input is undefined", () => {
      expect(() => extractQueryData(undefined)).toThrow(errMsg);
    });

    it("should throw an error when input is null", () => {
      expect(() => extractQueryData(null)).toThrow(errMsg);
    });

    it("should throw an error when input is empty object", () => {
      expect(() => extractQueryData({})).toThrow(errMsg);
    });

    it("should throw an error when input is boolean", () => {
      expect(() => extractQueryData(true)).toThrow(errMsg);
    });

    it("should throw an error when input is a string", () => {
      expect(() => extractQueryData("hello")).toThrow(errMsg);
    });
  });

  describe("Output", () => {
    it("should return an array", () => {
      expect(Array.isArray(extractQueryData([]))).toBe(true);
    });

    it("should return an empty array when input is empty", () => {
      expect(extractQueryData([])).toEqual([]);
    });

    it("should throw an error when statements array has invalid statements", () => {
      const errMsg = "Extract query data: Statement is not valid";
      expect(() => extractQueryData([8])).toThrow(errMsg);
      expect(() => extractQueryData([null])).toThrow(errMsg);
      expect(() => extractQueryData([undefined])).toThrow(errMsg);
      expect(() => extractQueryData([true])).toThrow(errMsg);
      expect(() => extractQueryData([{}])).toThrow(errMsg);
      expect(() => extractQueryData([""])).toThrow(errMsg);
    });

    it("should process conversion queries", () => {
      const mockQueries = [
        "how much is pish tegj glob glob ?",
        "How much is glob glob ?",
        "How much is glob glob?"
      ];
      expect(extractQueryData(mockQueries)).toEqual([
        ["pish tegj glob glob"],
        ["glob glob"],
        ["glob glob"]
      ]);
    });

    it("should process item price queries", () => {
      const mockQueries = [
        "how many Credits is glob prok Silver ?",
        " How many credits is glob prok Silver ?",
        "how many Credits is glob prok Silver   ?"
      ];
      expect(extractQueryData(mockQueries)).toEqual([
        ["glob prok", "Silver"],
        ["glob prok", "Silver"],
        ["glob prok", "Silver"]
      ]);
    });

    it("should process invalid queries", () => {
      const mockQueries = ["how much wood could a wood ?", "hello there?"];
      expect(extractQueryData(mockQueries)).toEqual([[null], [null]]);
    });
  });
});
