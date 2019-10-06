//Brute Force Approach
const findPairWithSum = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
};

//Optimized Solution
const findPairWithSum = (array, sum) => {
  let mySet = new Set();
  for (let element of array) {
    if (mySet.has(element)) {
      return true;
    } else {
      mySet.add(sum - element);
    }
  }
  return false;
};

module.exports = findPairWithSum;
