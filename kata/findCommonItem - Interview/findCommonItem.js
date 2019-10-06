const assert = require("assert");

//Naive Approach
//Worse time complexity because of nested loop
//Better space complexity because we are not creating new object
const findCommonItem = (array1, array2) => {
  for (let element of array1) {
    for (let item of array2) {
      if (element === item) {
        return true;
      }
    }
  }
  return false;
};

//Optimized Solution
//Better time complexity because of O(n)
//Worse space complexity because we are creating new object
const findCommonItem = (array1, array2) => {
  let storeObject = {};
  for (let element of array1) {
    if (!storeObject[element]) {
      storeObject[element] = true;
    }
  }

  for (let item of array2) {
    if (storeObject[item]) {
      return true;
    }
  }
  return false;
};

//Javascript Method
function findCommonItem(array1, array2) {
  return array1.some(item => array2.includes(item));
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

assert.deepStrictEqual(findCommonItem(array1, array2), false);
assert(findCommonItem(array3, array4));
