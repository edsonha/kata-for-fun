const ROMAN_NUMERAL = require("./constant");

class Dictionary {
  constructor(definitionDictionary) {
    this.state = definitionDictionary;
  }

  toRoman(input) {
    const wordsArray = input.split(" ");
    let romanNumeral = "";
    wordsArray.forEach((word) => {
      romanNumeral += this.state[word];
    });

    const romanNumeralRegex = /^(L?X{0,3})(IX|IV|V?I{0,3})$/;
    const isRomanNumeralValid = romanNumeral.match(romanNumeralRegex);
    if (isRomanNumeralValid) {
      return romanNumeral;
    }
    throw new Error("Invalid roman numeral");
  }

  toArabic(input) {
    const wordsArray = input.split("");
    let arabicNumber = 0;

    for (var i = 0; i < wordsArray.length; i++) {
      const currentWord = wordsArray[i];
      const nextWord = wordsArray[i + 1];

      if (
        ROMAN_NUMERAL[nextWord] === undefined ||
        ROMAN_NUMERAL[currentWord] >= ROMAN_NUMERAL[nextWord]
      ) {
        arabicNumber += ROMAN_NUMERAL[currentWord];
      } else {
        arabicNumber += ROMAN_NUMERAL[nextWord] - ROMAN_NUMERAL[currentWord];
        i++;
      }
    }

    return arabicNumber;
  }
}

module.exports = Dictionary;
