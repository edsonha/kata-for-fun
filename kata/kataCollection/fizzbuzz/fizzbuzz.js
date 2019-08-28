const fizzbuzz = number => {
  if (number === 0) {
    return null;
  }
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};

module.exports = fizzbuzz;
