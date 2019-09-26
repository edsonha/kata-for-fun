//Method 1
const flatten = array => {
  let result = [];
  for (element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element)); //for multiple nested array
      // result.push(...element); //for single nested array
    } else {
      result.push(element);
    }
  }
  return result;
};
module.exports = flatten;

//Method 2
const assert = require("assert");

const flatten = (array, result = []) => {
  array.forEach(element =>
    Array.isArray(element) ? flatten(element, result) : result.push(element)
  );
  return result;
};

const nestedArray = [1, 2, [3, [4, 5], 6]];
const actual = flatten(nestedArray);
const expected = [1, 2, 3, 4, 5, 6];

assert.deepStrictEqual(actual, expected);
