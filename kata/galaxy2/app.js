const { readText, groupStatements } = require("./src/utils/index");

const processInput = (fileDirectory) => {
  const statementsArray = readText(fileDirectory);
  const answer = groupStatements(statementsArray);
  console.log(answer);
};

processInput("./src/input.txt");
