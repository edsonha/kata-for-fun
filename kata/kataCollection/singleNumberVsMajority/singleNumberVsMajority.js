//Single Number - Given a non-empty array of integers, every element appears twice except for one. Find that single one.
const singleNumber = array => {
  let obj = {};
  for (let element of array) {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }
  for (let n in obj) {
    if (obj[n] === 1) return Number(n);
  }
};

//Alternative solution with O(1) space complexity
const singleNumber = array => {
  return array.reduce((acc, cur) => acc ^ cur, 0);
};

singleNumber([2, 2, 1]); //1
singleNumber([4, 1, 2, 1, 2]); //4

//Majority element - Given an array of size n, find the majority element.
const majorityElement = array => {
  let obj = {};
  for (let element of array) {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }
  for (let n in obj) {
    if (obj[n] === Math.max(...Object.values(obj))) return Number(n);
  }
};

majorityElement([3, 2, 3]); //3
majorityElement([2, 2, 1, 1, 1, 2, 2]); //2
