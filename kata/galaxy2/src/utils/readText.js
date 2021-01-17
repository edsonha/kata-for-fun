const fs = require("fs");

const readText = (path) => {
  try {
    const statements = fs.readFileSync(path, "utf8");
    const statementsArray = statements.split("\n");
    return statementsArray;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { readText };
