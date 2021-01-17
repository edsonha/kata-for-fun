const { groupStatements } = require("../../src/utils/groupStatements");

const mockStatementsArray = [
  "glob is I",
  "glob glob Silver is 34 Credits",
  "how much is pish tegj glob glob ?",
  "Z 100 Credit how",
];

describe("groupStatements", () => {
  it("should group the statements into its respective group", () => {
    const {
      definitionStatements,
      resourceStatements,
      queryStatements,
    } = groupStatements(mockStatementsArray);
    expect(definitionStatements).toEqual(["glob is I"]);
    expect(resourceStatements).toEqual(["glob glob Silver is 34 Credits"]);
    expect(queryStatements).toEqual(["how much is pish tegj glob glob ?"]);
  });
});
