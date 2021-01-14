const fs = require("fs");

const readText = (path) =>
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

module.exports = { readText };
