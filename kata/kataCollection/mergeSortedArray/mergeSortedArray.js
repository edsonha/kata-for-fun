function mergeSortedArray(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  const shouldPushArray1Item = () => {
    return array2Item === undefined || array1Item < array2Item;
  };

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item) //we need to put array2Item === undefined because without it, the function will go to infinite loop as undefined is considered as FALSY
    if (shouldPushArray1Item()) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArray([0, 3, 4, 31], [3, 4, 6, 30]); // return [0, 3, 3, 4, 4, 6, 30, 31]
