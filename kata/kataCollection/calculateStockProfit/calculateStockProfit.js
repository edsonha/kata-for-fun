//Say you have an array for which the ith element is the price of a given stock on day i.
//If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//Note that you cannot sell a stock before you buy one.
//Input: [7,1,5,3,6,4]
//Output: 5

//Input: [7,6,4,3,1]
//Output: 0

//Approach 1: Brute Force
const calculateProfit = array => {
  let myProfit = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let result = array[j] - array[i];
      if (result > myProfit) {
        myProfit = result;
      }
    }
  }
  return myProfit;
};

calculateProfit([7, 1, 5, 3, 6, 4]); //5
calculateProfit([7, 6, 4, 3, 1]); //0

//Approach 2: O(n)
const calculateProfit = array => {
  let minPrice = array[0];
  let maxPrice = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minPrice) {
      minPrice = array[i];
      maxPrice = array[i];
    }
    if (array[i] > minPrice) {
      if (array[i] > maxPrice) {
        maxPrice = array[i];
      }
    }
  }
  return maxPrice - minPrice;
};

calculateProfit([7, 1, 5, 3, 6, 4]); //5
calculateProfit([7, 6, 4, 3, 1]); //0
