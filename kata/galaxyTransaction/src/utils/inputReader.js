const fs = require("fs");

const inputReader = inputFileDir => {
  if (!inputFileDir || typeof inputFileDir !== "string") {
    throw new Error("Text file directory is not valid");
  }
  try {
    const statementArray = fs.readFileSync(inputFileDir, "utf8").split("\n");
    return statementArray;
  } catch (error) {
    throw new Error("Unable to find text file");
  }
};

module.exports = inputReader;
