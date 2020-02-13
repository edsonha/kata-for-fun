const inputProcessor = require("../src/inputProcessor");

const inputFileDir = "kata/galaxyTransaction/input/input.txt";

const expectedOutput = `pish tegj glob glob is 42\nglob prok Silver is 68 Credits\nglob prok Gold is 57800 Credits\nglob prok Iron is 782 Credits\nI have no idea what you are talking about\n`;

global.console.log = jest.fn();

describe("Input Processor", () => {
  it("should return correct answers to queries in input", () => {
    expect(inputProcessor(inputFileDir)).toBe(expectedOutput);
  });

  it("should log error message when input directory is invalid", () => {
    inputProcessor("");
    expect(global.console.log).toHaveBeenCalled();
  });
});
