module.exports.binarySearch = (array, itemId) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let middleItem = array[middle];
    if (middleItem.id === itemId) {
      return middleItem;
    } else if (middleItem.id < itemId) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return null;
};
