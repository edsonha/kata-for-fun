const {
  processDefinitionStatements,
} = require("../../src/utils/processDefinitionStatements");

const mockDefinitionStatements = [
  "glob is I",
  "prok is V",
  "pish is X",
  "tegj is L",
];

describe("processDefinitionStatements", () => {
  it("should turn the statements into a key-value pair object", () => {
    const definitionDictionary = processDefinitionStatements(
      mockDefinitionStatements
    );
    expect(definitionDictionary).toEqual({
      glob: "I",
      prok: "V",
      pish: "X",
      tegj: "L",
    });
  });
});
