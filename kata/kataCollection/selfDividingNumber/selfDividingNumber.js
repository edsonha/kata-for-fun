// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
// Example:
// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

const selfDividingNumbers = (left, right) => {
  let answer = [];
  for (let i = left; i <= right; i++) {
    if (selfDivide(i)) {
      answer.push(i);
    }
  }
  return answer;
};

const selfDivide = num => {
  const arr = [...`${num}`];
  for (let element of arr) {
    if (num % element !== 0) {
      return false;
    }
  }
  return true;
};

selfDividingNumbers(1, 22);
