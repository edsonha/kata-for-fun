const UnitConverter = require("../src/UnitConverter");

let converter;
beforeEach(() => {
  converter = new UnitConverter();
});

const mockUnits = { glob: "I", prok: "V" };

describe("UnitConverter class", () => {
  describe("Instance", () => {
    it("should check if an instance of UnitConverter can be created", () => {
      expect(converter).toBeInstanceOf(UnitConverter);
    });

    it("should have units property as an empty object", () => {
      expect(converter.units).toEqual({});
    });
  });

  describe("addUnits method", () => {
    it("should throw error when units is not an object with key-value pair", () => {
      expect(() => converter.addUnits(8)).toThrow(
        "addUnits: Argument is not valid"
      );
      expect(() => converter.addUnits("string")).toThrow(
        "addUnits: Argument is not valid"
      );
      expect(() => converter.addUnits(true)).toThrow(
        "addUnits: Argument is not valid"
      );
      expect(() => converter.addUnits(undefined)).toThrow(
        "addUnits: Argument is not valid"
      );
      expect(() => converter.addUnits(null)).toThrow(
        "addUnits: Argument is not valid"
      );
    });

    it("should throw an error if units is an empty array or empty object", () => {
      expect(() => converter.addUnits([])).toThrow(
        "addUnits: Argument is not valid"
      );
      expect(() => converter.addUnits({})).toThrow(
        "addUnits: Argument is not valid"
      );
    });

    it("should create key-value pairs of matching inter-galactic & roman numerals in units property", () => {
      converter.addUnits(mockUnits);
      expect(converter.units).toEqual({
        glob: "I",
        prok: "V"
      });
    });

    it("should throw error when a symbol is not a Roman Numeral", () => {
      mockUnits2 = { glob: "A" };
      expect(() => {
        converter.addUnits(mockUnits2);
      }).toThrow("addUnits: Symbol is not a Roman numeral");
    });
  });

  describe("toRoman method", () => {
    it("should throw an error when phrase is not a string", () => {
      const errMsg = "toRoman: Arguement is not valid";
      expect(() => converter.toRoman()).toThrow(errMsg);
      expect(() => converter.toRoman(8)).toThrow(errMsg);
      expect(() => converter.toRoman([])).toThrow(errMsg);
      expect(() => converter.toRoman({})).toThrow(errMsg);
      expect(() => converter.toRoman(true)).toThrow(errMsg);
      expect(() => converter.toRoman(undefined)).toThrow(errMsg);
      expect(() => converter.toRoman(null)).toThrow(errMsg);
    });

    it("should throw an error when phrase is not valid", () => {
      converter.addUnits(mockUnits);
      const errMsg = "toRoman: Unit is not found";
      expect(() => converter.toRoman("tin")).toThrow(errMsg);
      expect(() => converter.toRoman("plat plat")).toThrow(errMsg);
    });

    it("should return correct Roman numerals", () => {
      converter.addUnits(mockUnits);
      expect(converter.toRoman("glob")).toBe("I");
      expect(converter.toRoman("glob glob")).toBe("II");
      expect(converter.toRoman("prok glob")).toBe("VI");
    });

    it("should return correct Roman numerals when there are whitespaces around phrase", () => {
      converter.addUnits(mockUnits);
      expect(converter.toRoman("glob glob ")).toBe("II");
      expect(converter.toRoman(" glob glob ")).toBe("II");
    });

    it("should throw error if phrase does not convert to a valid Roman numeral", () => {
      converter.addUnits(mockUnits);
      const errMsg = "toRoman: Roman numerals is not valid";
      expect(() => converter.toRoman("glob glob prok")).toThrow(errMsg);
      expect(() => converter.toRoman("prok prok")).toThrow(errMsg);
    });

    it("should return a string", () => {
      converter.addUnits(mockUnits);
      expect(typeof converter.toRoman("glob")).toBe("string");
    });
  });

  describe("isRomanNumeralsValid method", () => {
    it("should throw error if argument is not a string", () => {
      const errMsg = "isRomanNumeralsValid: Argument is not a string";
      expect(() => {
        converter.isRomanNumeralsValid(8);
      }).toThrow(errMsg);
      expect(() => {
        converter.isRomanNumeralsValid([]);
      }).toThrow(errMsg);
      expect(() => {
        converter.isRomanNumeralsValid({});
      }).toThrow(errMsg);
      expect(() => {
        converter.isRomanNumeralsValid(true);
      }).toThrow(errMsg);
      expect(() => {
        converter.isRomanNumeralsValid(undefined);
      }).toThrow(errMsg);
      expect(() => {
        converter.isRomanNumeralsValid(null);
      }).toThrow(errMsg);
    });

    it("should return false if argument is a non-Roman numeral", () => {
      expect(converter.isRomanNumeralsValid("aI")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("3")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("!")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("B")).toBeFalsy();
    });

    it("should return false if I/X/C/M are repeated more than 3 times in succession", () => {
      expect(converter.isRomanNumeralsValid("IIII")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XXXX")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("CCCC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("MMMM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("MMMMM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XXXIX")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("CCCXC")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("MMMCM")).toBeTruthy();
    });

    it("should return false if D/L/V are repeated", () => {
      expect(converter.isRomanNumeralsValid("DD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("LL")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VV")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VVVV")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("V")).toBeTruthy();
    });

    it("should return false if I can be subtracted from symbols besides V and X", () => {
      expect(converter.isRomanNumeralsValid("IL")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("ID")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IV")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("IX")).toBeTruthy();
    });

    it("should return false if X can be subtracted from symbols besides L and C", () => {
      expect(converter.isRomanNumeralsValid("XD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XL")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("XC")).toBeTruthy();
    });

    it("should return true when C is subtracted with D and M", () => {
      expect(converter.isRomanNumeralsValid("CD")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("CM")).toBeTruthy();
    });

    it("should return false if V is subtracted from other symbols", () => {
      expect(converter.isRomanNumeralsValid("VX")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VL")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("VM")).toBeFalsy();
    });

    it("should return false if L is subtracted from other symbols", () => {
      expect(converter.isRomanNumeralsValid("LC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("LD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("LM")).toBeFalsy();
    });

    it("should return false if D is subtracted from other symbols", () => {
      expect(converter.isRomanNumeralsValid("DM")).toBeFalsy();
    });

    it("should return false if I is subtracted more than once from V or X", () => {
      expect(converter.isRomanNumeralsValid("IIV")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IIIV")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IIX")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IIIX")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IV")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("IX")).toBeTruthy();
    });

    it("should return false if X is subtracted more than once from L or C", () => {
      expect(converter.isRomanNumeralsValid("XXL")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XXXL")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XXC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XXXC")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("XL")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("XC")).toBeTruthy();
    });

    it("should return false if C is subtracted more than once from D or M", () => {
      expect(converter.isRomanNumeralsValid("CCD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("CCCD")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("CCM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("CCCM")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("CD")).toBeTruthy();
      expect(converter.isRomanNumeralsValid("CM")).toBeTruthy();
    });

    it("should return false if I is on both sides of V or X", () => {
      expect(converter.isRomanNumeralsValid("IVI")).toBeFalsy();
      expect(converter.isRomanNumeralsValid("IXI")).toBeFalsy();
    });
  });

  describe("toArabic method", () => {
    it("should return a number", () => {
      converter.addUnits(mockUnits);
      expect(typeof converter.toArabic("glob")).toBe("number");
    });

    it("should convert phrase to an Arabic numeral", () => {
      converter.addUnits(mockUnits);
      expect(converter.toArabic("glob")).toBe(1);
      expect(converter.toArabic("glob prok")).toBe(4);
      expect(converter.toArabic("prok")).toBe(5);
      expect(converter.toArabic("prok glob glob glob")).toBe(8);
    });
  });

  describe("romanToArabic method", () => {
    it("should return a number", () => {
      converter.addUnits(mockUnits);
      expect(typeof converter.romanToArabic("I")).toBe("number");
    });

    it("should throw error if roman number is not a valid Roman numeral", () => {
      const errMsg = "romanToArabic: Roman numerals is not valid";
      expect(() => {
        converter.romanToArabic("IIV");
      }).toThrow(errMsg);
      expect(() => {
        converter.romanToArabic("VV");
      }).toThrow(errMsg);
    });

    it("should convert Roman numerals with only one type of symbol", () => {
      expect(converter.romanToArabic("I")).toBe(1);
      expect(converter.romanToArabic("III")).toBe(3);
      expect(converter.romanToArabic("V")).toBe(5);
      expect(converter.romanToArabic("XX")).toBe(20);
      expect(converter.romanToArabic("L")).toBe(50);
      expect(converter.romanToArabic("CC")).toBe(200);
      expect(converter.romanToArabic("D")).toBe(500);
      expect(converter.romanToArabic("MMM")).toBe(3000);
    });

    it("should convert Roman numerals with multiple symbols", () => {
      expect(converter.romanToArabic("MDCLXVI")).toBe(1666);
      expect(converter.romanToArabic("MMCCXXII")).toBe(2222);
      expect(converter.romanToArabic("DLVI")).toBe(556);
    });

    it("should convert Roman numerals with subtraction", () => {
      expect(converter.romanToArabic("MCMXLIV")).toBe(1944);
      expect(converter.romanToArabic("MCDIV")).toBe(1404);
      expect(converter.romanToArabic("MMMCMXCIX")).toBe(3999);
    });
  });
});
