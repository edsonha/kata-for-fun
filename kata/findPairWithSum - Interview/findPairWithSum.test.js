const findPairWithSum = require("./findPairWithSum");

describe("findPairWithSum", () => {
  it("should return false when given sum is 8 and array is [1,2,3,4,9]", () => {
    expect(findPairWithSum([1, 2, 3, 4, 9], 8)).toBe(false);
  });

  it("should return true when given sum is 8 and array is [1,2,3,4,5]", () => {
    expect(findPairWithSum([1, 2, 3, 4, 5], 8)).toBe(true);
  });

  it("should return false when given sum is 8 and array is [1,2,3,4]", () => {
    expect(findPairWithSum([1, 2, 3, 4], 8)).toBe(false);
  });
});
