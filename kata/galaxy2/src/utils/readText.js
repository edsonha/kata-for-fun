const fs = require("fs");

const readText = (path) => {
  try {
    const statements = fs.readFileSync(path, "utf8");
    const arrayOfStatements = statements.split("\n");
    return arrayOfStatements;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { readText };
