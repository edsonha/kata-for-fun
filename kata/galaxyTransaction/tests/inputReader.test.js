const fs = require("fs");
const { inputReader } = require("../src/utils");

describe("Input reader", () => {
  describe("Irregular input file directory", () => {
    it("should throw an error when input file directory is not passed", () => {
      expect(() => inputReader()).toThrow("Text file directory is not valid");
    });

    it("should throw an error when input file directory is a number", () => {
      expect(() => inputReader(8)).toThrow("Text file directory is not valid");
    });

    it("should throw an error when input file directory is undefined", () => {
      expect(() => inputReader(undefined)).toThrow(
        "Text file directory is not valid"
      );
    });

    it("should throw an error when input file directory is null", () => {
      expect(() => inputReader(null)).toThrow(
        "Text file directory is not valid"
      );
    });

    it("should throw an error when input file directory is empty array", () => {
      expect(() => inputReader([])).toThrow("Text file directory is not valid");
    });

    it("should throw an error when input file directory is empty object", () => {
      expect(() => inputReader({})).toThrow("Text file directory is not valid");
    });

    it("should throw an error when input file directory is boolean", () => {
      expect(() => inputReader(true)).toThrow(
        "Text file directory is not valid"
      );
    });

    it("should throw an error when input file directory is an empty string", () => {
      expect(() => inputReader("")).toThrow("Text file directory is not valid");
    });

    it("should throw an error when dir is not valid", () => {
      expect(() => inputReader("input file directory")).toThrow(
        "Unable to find text file"
      );
    });
  });

  describe("Output", () => {
    const spyReadFileSync = jest.spyOn(fs, "readFileSync");
    it("should return an empty array", () => {
      spyReadFileSync.mockReturnValueOnce("");
      expect(inputReader("abc")).toEqual([""]);
    });

    it("should return an array of strings", () => {
      spyReadFileSync.mockReturnValueOnce("hello\nworld");
      expect(inputReader("abc")).toEqual(["hello", "world"]);
    });
  });
});
