const { insertionSort } = require("./insertionSort");

describe("insertionSort", () => {
  it("should sort array", () => {
    expect(insertionSort([9, 8, 7])).toEqual([7, 8, 9]);
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1, 3, 5, 7, 13])).toEqual([1, 3, 5, 7, 13]);
    expect(insertionSort([5, 13, 1, 3, 7])).toEqual([1, 3, 5, 7, 13]);
    expect(insertionSort([13, 13, 1, -1, 7, 7])).toEqual([-1, 1, 7, 7, 13, 13]);
  });
});
