var findDisappearedNumbers = array => {
  var sortedArray = array.sort((a, b) => {
    return a - b;
  });
  var uniqueArray = [...new Set(sortedArray)];
  let number = uniqueArray[0];
  let result = [];
  while (uniqueArray[0] !== undefined) {
    if (uniqueArray[0] === number) {
      uniqueArray.shift();
      number = number + 1;
    } else {
      result.push(number);
      number = number + 1;
    }
  }
  return result;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); //[5,6]
