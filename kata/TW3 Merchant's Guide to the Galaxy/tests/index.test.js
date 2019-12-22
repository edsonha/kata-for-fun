const Dictionary = require("../src");

const dictionary = new Dictionary();

describe("convert the word 'glob' to human number", () => {
  it('should return 1 for "glob"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("glob")).toBe(1);
  });

  it('should return 2 for "glob glob"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("glob glob")).toBe(2);
  });

  it('should return 3 for "glob glob glob"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("glob glob glob")).toBe(
      3
    );
  });

  it('should return an error for "glob glob glob glob"', () => {
    expect(() =>
      dictionary.convertAlienNumberToHumanNumber("glob glob glob glob")
    ).toThrowError();
  });
});

describe("convert the word 'prok' to human number", () => {
  it('should return 4 for "glob prok"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("glob prok")).toBe(4);
  });

  it('should return 5 for "prok"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("prok")).toBe(5);
  });

  it('should return 6 for "prok glob"', () => {
    expect(dictionary.convertAlienNumberToHumanNumber("prok glob")).toBe(6);
  });
});
