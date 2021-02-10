const Dictionary = require("../src/Dictionary");

const mockDefinitionDictionary = { glob: "I", prok: "V" };

let dictionary;
beforeEach(() => {
  dictionary = new Dictionary(mockDefinitionDictionary);
});

describe("Dictionary", () => {
  describe("Dictionary instance", () => {
    it("is created from Dictionary class and has state", () => {
      expect(dictionary).toBeInstanceOf(Dictionary);
      expect(dictionary.state).toEqual({ glob: "I", prok: "V" });
    });
  });

  describe("toRoman", () => {
    it("should convert foreign language to roman number", () => {
      expect(dictionary.toRoman("glob")).toBe("I");
      expect(dictionary.toRoman("glob glob")).toBe("II");
      expect(dictionary.toRoman("glob prok")).toBe("IV");
      expect(dictionary.toRoman("prok glob")).toBe("VI");
      expect(dictionary.toRoman("prok glob glob")).toBe("VII");
    });

    test.each([
      ["glob glob glob glob"],
      ["glob glob prok"],
      ["prok glob glob glob glob"],
      ["prok prok"],
      ["random text"],
    ])("%s should throw error", (invalidRomanNumeral) => {
      expect(() => dictionary.toRoman(invalidRomanNumeral)).toThrowError(
        "Invalid roman numeral"
      );
    });

    describe("toArabic", () => {
      it("should convert roman number to arabic number", () => {
        expect(dictionary.toArabic("I")).toBe(1);
        expect(dictionary.toArabic("III")).toBe(3);
        expect(dictionary.toArabic("IV")).toBe(4);
        expect(dictionary.toArabic("VI")).toBe(6);
      });
    });
  });
});
