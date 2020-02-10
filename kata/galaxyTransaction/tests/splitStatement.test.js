const { splitStatement } = require("../src/utils");

describe("Split Statement", () => {
  describe("Irregular input", () => {
    const errMsg = "Split statement: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => splitStatement()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => splitStatement(8)).toThrow(errMsg);
    });

    it("should throw an error when input is undefined", () => {
      expect(() => splitStatement(undefined)).toThrow(errMsg);
    });

    it("should throw an error when input is null", () => {
      expect(() => splitStatement(null)).toThrow(errMsg);
    });

    it("should throw an error when input is empty object", () => {
      expect(() => splitStatement({})).toThrow(errMsg);
    });

    it("should throw an error when input is boolean", () => {
      expect(() => splitStatement(true)).toThrow(errMsg);
    });

    it("should throw an error when input is a string", () => {
      expect(() => splitStatement("hello")).toThrow(errMsg);
    });
  });

  const mockInput = [
    "glob is I",
    "prok is V",
    "glob glob Silver is 34 Credits",
    "glob prok Gold is 57800 Credits",
    "how much is pish tegj glob glob ?",
    "how many Credits is glob prok Silver ?",
    "how much wood could a woodchuck ?"
  ];

  describe("Output", () => {
    it("should return an object", () => {
      expect(typeof splitStatement([])).toEqual("object");
    });

    it("should return an object with 3 keys", () => {
      expect(Object.keys(splitStatement([])).length).toBe(3);
    });

    it("should return an object with values that contain arrays", () => {
      const isArray = item => Array.isArray(item);
      const valuesArr = Object.values(splitStatement([]));
      expect(valuesArr.every(isArray)).toBe(true);
    });

    it("should return an object with empty arrays when input is empty", () => {
      expect(splitStatement([])).toEqual({
        translationStatement: [],
        resourcePriceStatement: [],
        queryStatement: []
      });
    });

    it("should return an object with properties with empty arrays when input has invalid statements", () => {
      const expectedOutput = {
        translationStatement: [],
        resourcePriceStatement: [],
        queryStatement: []
      };
      expect(splitStatement([8])).toEqual(expectedOutput);
      expect(splitStatement([{}])).toEqual(expectedOutput);
      expect(splitStatement([[]])).toEqual(expectedOutput);
      expect(splitStatement([true])).toEqual(expectedOutput);
    });

    it("should filter translation statements from data", () => {
      expect(splitStatement(mockInput).translationStatement).toEqual([
        "glob is I",
        "prok is V"
      ]);
    });

    it("should filter resource price statements from data", () => {
      expect(splitStatement(mockInput).resourcePriceStatement).toEqual([
        "glob glob Silver is 34 Credits",
        "glob prok Gold is 57800 Credits"
      ]);
    });

    it("should filter querie statements from data", () => {
      expect(splitStatement(mockInput).queryStatement).toEqual([
        "how much is pish tegj glob glob ?",
        "how many Credits is glob prok Silver ?",
        "how much wood could a woodchuck ?"
      ]);
    });
  });
});
