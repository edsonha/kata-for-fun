const zeros = require("./zeros");

describe("Zeros", () => {
  it("should move one zero to the back when there is an array of numbers", () => {
    expect(zeros([0, 1])).toEqual([1, 0]);
    expect(zeros([0, 1, 0])).toEqual([1, 0, 0]);
  });

  it("should move two zeros to the back when there is an array of three numbers", () => {
    expect(zeros([0, 0, 1])).toEqual([1, 0, 0]);
  });

  it("should move one zero to the back when there is an array of number, boolean and string", () => {
    expect(zeros([0, 1, true, "random"])).toEqual([1, true, "random", 0]);
  });

  it("should move three zero to the back when there is an array of number, boolean and string", () => {
    expect(zeros([0, 1, 0, true, 0, "random"])).toEqual([
      1,
      true,
      "random",
      0,
      0,
      0
    ]);
  });
});
