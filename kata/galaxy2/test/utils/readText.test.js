const { readText } = require("../../src/utils/readText");
const fs = require("fs");

describe("readText", () => {
  it("should ensure that fs readFileSync function is called", () => {
    jest.spyOn(fs, "readFileSync").mockImplementation((path, option) => "text");

    readText("mockfile.txt");
    expect(fs.readFileSync).toBeCalledWith("mockfile.txt", "utf8");
  });

  it("should throw error when read file failed", () => {
    const logSpy = jest.spyOn(console, "log");
    jest.spyOn(fs, "readFileSync").mockImplementation((path) => {
      throw new Error("error");
    });

    readText("mockfile.txt");
    expect(logSpy).toBeCalledWith("error");
  });

  test.each([
    ["", [""]],
    ["Hello world\nBye world", ["Hello world", "Bye world"]],
    [`Hello\nworld\n!`, ["Hello", "world", "!"]],
  ])("%o should return array of statement [%s]", (mockText, expectedOutput) => {
    jest
      .spyOn(fs, "readFileSync")
      .mockImplementation((path, option) => mockText);

    const response = readText("mockfile.txt");
    expect(response).toEqual(expectedOutput);
  });
});
