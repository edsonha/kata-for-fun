const Dictionary = require("./src/Dictionary");
const {
  readText,
  groupStatements,
  processDefinitionStatements,
} = require("./src/utils/index");

const processInput = (fileDirectory) => {
  const statementsArray = readText(fileDirectory);
  const {
    definitionStatements,
    resourceStatements,
    queryStatements,
  } = groupStatements(statementsArray);
  const definitionDictionary = processDefinitionStatements(
    definitionStatements
  );
  const dictionary = new Dictionary(definitionDictionary);
  dictionary.console();
};

processInput("./src/input.txt");
