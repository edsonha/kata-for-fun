const fs = require("fs");

const readText = (path) =>
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    const arrayOfStatements = data.split("\n");
    return arrayOfStatements;
  });

module.exports = { readText };
