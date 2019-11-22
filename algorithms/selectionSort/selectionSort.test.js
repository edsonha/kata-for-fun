const { selectionSort } = require("./selectionSort");

describe("selectionSort", () => {
  it("should sort array", () => {
    expect(selectionSort([9, 8, 7])).toEqual([7, 8, 9]);
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1, 3, 5, 7, 13])).toEqual([1, 3, 5, 7, 13]);
    expect(selectionSort([5, 13, 1, 3, 7])).toEqual([1, 3, 5, 7, 13]);
    expect(selectionSort([13, 13, 1, -1, 7, 7])).toEqual([-1, 1, 7, 7, 13, 13]);
  });
});
