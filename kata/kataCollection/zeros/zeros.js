const zeros = array => {
  const originalArrayLength = array.length;
  let filteredArray = array.filter(element => element !== 0);
  const filteredArrayLength = filteredArray.length;
  const counter = originalArrayLength - filteredArrayLength;
  for (let i = 0; i < counter; i++) {
    filteredArray = filteredArray.concat([0]);
  }
  return filteredArray;
};

module.exports = zeros;
