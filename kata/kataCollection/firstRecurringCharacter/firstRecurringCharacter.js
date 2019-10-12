// Time Complexity - O(n)
// Space Complexity - O(n)
function firstRecurringCharacter(input) {
  const mySet = new Set();
  for (let element of input) {
    if (mySet.has(element)) {
      return element;
    } else {
      mySet.add(element);
    }
  }
  return mySet;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function firstRecurringCharacter2(input) {
  let hashTable = {};
  for (let i = 0; i < input.length; i++) {
    console.log(hashTable[input[i]]);
    if (hashTable[input[i]] !== undefined) {
      // undefined is falsy. If hashTable[input[i]] is 0, it means falsy. So we have to do !== undefined to make it true
      return input[i];
    } else {
      hashTable[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]); //It should return 2
firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]); //It should return 1
firstRecurringCharacter2([2, 3, 4, 5]); //undefined
