const { readText } = require("./src/utils/readText");

const processInput = (fileDirectory) => {
  const answer = readText(fileDirectory);
  console.log(answer);
};

processInput("./src/input.txt");
