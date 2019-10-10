const checkDuplicate = array => {
  let mySet = new Set();
  for (let element of array) {
    if (mySet.has(element)) {
      return true;
    } else {
      mySet.add(element);
    }
  }
  return false;
};

checkDuplicate([1, 4, 5, 6, 6, 10]); //true
checkDuplicate([1, 2, 3, 1]); //true
checkDuplicate([1, 2, 3, 4]); //false
