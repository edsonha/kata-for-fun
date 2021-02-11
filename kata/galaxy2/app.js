const Dictionary = require("./src/Dictionary");
const {
  readText,
  groupStatements,
  processDefinitionStatements,
  processResourceStatements,
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

  const resourceInfo = processResourceStatements(
    resourceStatements,
    dictionary
  );
  const shop = new Shop(resourceInfo);
};

processInput("./src/input.txt");
