const { extractTranslationData } = require("../src/utils");

describe("Extract Translation Data", () => {
  describe("Irregular input", () => {
    const errMsg = "Extract translation data: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => extractTranslationData()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => extractTranslationData(8)).toThrow(errMsg);
    });

    it("should throw an error when input is undefined", () => {
      expect(() => extractTranslationData(undefined)).toThrow(errMsg);
    });

    it("should throw an error when input is null", () => {
      expect(() => extractTranslationData(null)).toThrow(errMsg);
    });

    it("should throw an error when input is empty object", () => {
      expect(() => extractTranslationData({})).toThrow(errMsg);
    });

    it("should throw an error when input is boolean", () => {
      expect(() => extractTranslationData(true)).toThrow(errMsg);
    });

    it("should throw an error when input is a string", () => {
      expect(() => extractTranslationData("hello")).toThrow(errMsg);
    });
  });

  const mockTranslationData = ["glob is I", "prok is V"];

  describe("Output", () => {
    it("should return an object", () => {
      expect(typeof extractTranslationData([])).toEqual("object");
    });

    it("should return an empty object when input is empty", () => {
      expect(extractTranslationData([])).toEqual({});
    });

    it("should throw an error when statements array has invalid statements", () => {
      const errMsg = "Extract translation data: Statement is not valid";
      expect(() => extractTranslationData([8])).toThrow(errMsg);
      expect(() => extractTranslationData([""])).toThrow(errMsg);
      expect(() => extractTranslationData([null])).toThrow(errMsg);
      expect(() => extractTranslationData([undefined])).toThrow(errMsg);
      expect(() => extractTranslationData([true])).toThrow(errMsg);
      expect(() => extractTranslationData([{}])).toThrow(errMsg);
      expect(() => extractTranslationData(["hello there"])).toThrow(errMsg);
    });

    it("should return an object with galactic numeral and roman numeral", () => {
      expect(extractTranslationData(mockTranslationData)).toEqual({
        glob: "I",
        prok: "V"
      });
    });
  });
});
