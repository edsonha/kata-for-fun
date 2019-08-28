const fizzbuzz = require("./fizzbuzz");

describe("Fizzbuzz", () => {
  it("should return null when the number is 0", () => {
    expect(fizzbuzz(0)).toBe(null);
  });

  it("should return 1 and 2 as number when the fizzbuzz number is 2", () => {
    expect(fizzbuzz(2)).toEqual([1, 2]);
  });

  it("should return 1, 2 and fizz when the fizzbuzz number is 3", () => {
    expect(fizzbuzz(3)).toEqual([1, 2, "fizz"]);
  });

  it("should return 1, 2, fizz, 4 and buzz when the fizzbuzz number is 5", () => {
    expect(fizzbuzz(5)).toEqual([1, 2, "fizz", 4, "buzz"]);
  });

  it("should return fizzbuzz for number 15 when the fizzbuzz number is 15", () => {
    expect(fizzbuzz(15)).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz"
    ]);
  });
});
