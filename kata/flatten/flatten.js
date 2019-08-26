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
