const { readText } = require("../../src/utils/readText");
const fs = require("fs");

const mockText = `Hello\nworld\n!`;

describe("readText", () => {
  let readFileCallback;
  beforeEach(() => {
    jest.spyOn(fs, "readFile").mockImplementation((path, options, callback) => {
      readFileCallback = callback;
    });

    readText("mockfile.txt");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should ensure that fs readFile function is called", () => {
    readFileCallback(null, mockText);
    expect(fs.readFile).toBeCalledWith(
      "mockfile.txt",
      "utf8",
      readFileCallback
    );
  });

  it("should throw error when read file failed", () => {
    const mError = new Error("read file failed");
    expect(() => readFileCallback(mError, null)).toThrowError(mError);
    expect(fs.readFile).toBeCalledWith(
      "mockfile.txt",
      "utf8",
      readFileCallback
    );
  });

  test.each([
    ["", [""]],
    ["Hello world\nBye world", ["Hello world", "Bye world"]],
    [mockText, ["Hello", "world", "!"]],
  ])("%o should return array of statement [%s]", (mockText, expectedOutput) => {
    const response = readFileCallback(null, mockText);
    expect(response).toEqual(expectedOutput);
  });
});
