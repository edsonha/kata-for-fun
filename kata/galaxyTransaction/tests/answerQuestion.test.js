const { answerQuestion } = require("../src/utils");
const UnitConverter = require("../src/UnitConverter");
const Shop = require("../src/Shop");

const mockConverter = new UnitConverter();
mockConverter.addUnits({ glob: "I", prok: "V" });

const mockShop = new Shop();
mockShop.addItems({ Silver: 17, Gold: 14450 });

describe("Answer Question", () => {
  describe("Irregular input", () => {
    const errMsg = "Answer question: Argument is not valid";
    it("should throw an error when input is not passed", () => {
      expect(() => answerQuestion()).toThrow(errMsg);
    });

    it("should throw an error when input is a number", () => {
      expect(() => answerQuestion(8)).toThrow(errMsg);
    });

    it("should throw an error when input is undefined", () => {
      expect(() => answerQuestion(undefined)).toThrow(errMsg);
    });

    it("should throw an error when input is null", () => {
      expect(() => answerQuestion(null)).toThrow(errMsg);
    });

    it("should throw an error when input is empty object", () => {
      expect(() => answerQuestion({})).toThrow(errMsg);
    });

    it("should throw an error when input is boolean", () => {
      expect(() => answerQuestion(true)).toThrow(errMsg);
    });

    it("should throw an error when input is a string", () => {
      expect(() => answerQuestion("hello")).toThrow(errMsg);
    });
  });

  describe("Instance", () => {
    it("should create mock converter instance of Unit Converter Class", () => {
      expect(mockConverter).toBeInstanceOf(UnitConverter);
    });

    it("should create mock shop instance of Shop Class", () => {
      expect(mockShop).toBeInstanceOf(Shop);
    });
  });

  describe("Output", () => {
    it("should return a string", () => {
      expect(typeof answerQuestion([]) === "string").toBe(true);
    });

    it("should process conversion queries", () => {
      const mockQuestionData = [["glob glob"], ["glob prok"]];
      expect(answerQuestion(mockQuestionData, mockConverter, mockShop)).toBe(
        "glob glob is 2\nglob prok is 4\n"
      );
    });

    it("should process item price queries", () => {
      const mockQuestionData = [
        ["glob prok", "Gold"],
        ["glob glob", "Silver"]
      ];
      expect(answerQuestion(mockQuestionData, mockConverter, mockShop)).toBe(
        "glob prok Gold is 57800 Credits\nglob glob Silver is 34 Credits\n"
      );
    });

    it(`should return "I have no idea" message string when question data is null`, () => {
      const message = "I have no idea what you are talking about\n";
      expect(answerQuestion([[null]], mockConverter, mockShop)).toBe(message);
    });
  });
});
