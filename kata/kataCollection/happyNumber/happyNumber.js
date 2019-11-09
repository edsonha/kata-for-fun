//A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits,
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1
//are happy numbers.
//Example:
//Input: 19
//Output: true
//Explanation:
//1^2 + 9^2 = 82
//8^2 + 2^2 = 68
//6^2 + 8^2 = 100
//1^2 + 0^2 + 0^2 = 1

const happyNumber = num => {
  let result = 0;
  let mySet = new Set();
  while (result !== 1) {
    const numberArray = num.toString().split("");
    num = numberArray.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    result = num;
    if (mySet.has(result)) {
      return false;
    }
    mySet.add(result);
  }
  return true;
};

happyNumber(19); //true
happyNumber(3); //false
