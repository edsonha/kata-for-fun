const {
  processResourceStatements,
} = require("../../src/utils/processResourceStatements");
const Dictionary = require("../../src/Dictionary");

jest.mock("../../src/Dictionary.js");

let mockDictionary;
beforeEach(() => {
  mockDictionary = new Dictionary();
  mockDictionary.toArabic.mockReturnValueOnce(2);
  mockDictionary.toArabic.mockReturnValueOnce(20);
});

const mockResourceStatements = [
  "glob glob Silver is 34 Credits",
  "pish pish Iron is 3910 Credits",
];

describe("processResourceStatements", () => {
  it("should turn the statements into array of resource, quantity and price", () => {
    const resourceInfo = processResourceStatements(
      mockResourceStatements,
      mockDictionary
    );
    expect(resourceInfo).toEqual({
      Silver: 17,
      Iron: 195.5,
    });
  });
});
