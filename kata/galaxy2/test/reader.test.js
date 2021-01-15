const { readText } = require("../src/reader");
const fs = require("fs");

const mockPoem = "Mock Poem written here.";

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

  it("should print mock poem to console", () => {
    const logSpy = jest.spyOn(console, "log");
    readFileCallback(null, mockPoem);
    expect(logSpy).toBeCalledWith(mockPoem);
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
});
