const REPLACEMENT = "mummy";

const isVowel = letter => {
  return letter.match(/[aeiouAEIOU]/g);
};

const isVowelsLessThan30Percent = word => {
  let vowelCounter = 0;
  for (let letter of word) {
    if (isVowel(letter)) {
      vowelCounter += 1;
    }
  }
  return vowelCounter / word.length < 0.3;
};

const mummify = word => {
  if (typeof word !== "string") throw new TypeError("Please input string");
  if (isVowelsLessThan30Percent(word)) return word;
  return replaceVowel(word);
};

const replaceVowel = word => {
  let result = "";
  for (let letter of word) {
    if (!isVowel(letter)) {
      result += letter;
    } else if (!result.endsWith(REPLACEMENT)) {
      result += REPLACEMENT;
    }
  }
  return result;
};

module.exports = mummify;
