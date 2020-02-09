const {
  ROMAN_NUMERALS,
  ROMAN_NUMERALS_VALIDATOR_REGEX
} = require("../constants");

class UnitConverter {
  constructor() {
    this.units = {};
  }

  addUnits(unitObj) {
    if (
      typeof unitObj !== "object" ||
      unitObj === null ||
      Object.entries(unitObj).length === 0
    ) {
      throw new Error("addUnits: Argument is not valid");
    }
    for (let property in unitObj) {
      if (ROMAN_NUMERALS[unitObj[property]] === undefined) {
        throw new Error("addUnits: Symbol is not a Roman numeral");
      }
    }
    this.units = unitObj;
  }

  isRomanNumeralsValid(romanNumerals) {
    if (typeof romanNumerals !== "string") {
      throw new Error("isRomanNumeralsValid: Argument is not a string");
    }
    return romanNumerals.match(
      new RegExp(ROMAN_NUMERALS_VALIDATOR_REGEX, "gi")
    );
  }

  toRoman(phrase) {
    if (typeof phrase !== "string") {
      throw new Error("toRoman: Arguement is not valid");
    }
    const phraseArr = phrase.trim().split(" ");
    let romanNumerals = "";
    for (let word of phraseArr) {
      if (this.units[word] === undefined) {
        throw new Error("toRoman: Unit is not found");
      }
      romanNumerals += this.units[word];
    }
    if (this.isRomanNumeralsValid(romanNumerals)) {
      return romanNumerals;
    } else {
      throw new Error("toRoman: Roman numerals is not valid");
    }
  }

  romanToArabic(romanNumber) {
    if (!this.isRomanNumeralsValid(romanNumber)) {
      throw new Error("romanToArabic: Roman numerals is not valid");
    }
    let arabicNumber = 0;
    for (let i = 0; i < romanNumber.length; i++) {
      let currentValue = ROMAN_NUMERALS[romanNumber[i]];
      let nextValue = ROMAN_NUMERALS[romanNumber[i + 1]];
      if (currentValue < nextValue) {
        arabicNumber -= currentValue;
      } else {
        arabicNumber += currentValue;
      }
    }
    return arabicNumber;
  }

  toArabic(phrase) {
    const romanNumber = this.toRoman(phrase);
    return this.romanToArabic(romanNumber);
  }
}

module.exports = UnitConverter;
