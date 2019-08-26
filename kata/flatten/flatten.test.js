const flatten = require("./flatten");

describe("Flatten", () => {
  it("should not flatten array when there is not nested array", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should flatten array when there is a nested array", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("should flatten array when there is double nested array", () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should flatten array when there is multiple nested array", () => {
    expect(flatten([1, [2, [3, [4, [5, 6, 7]]]], [8, 9, 10]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});
