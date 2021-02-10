const { readText } = require("./readText");
const { groupStatements } = require("./groupStatements");
const {
  processDefinitionStatements,
} = require("./processDefinitionStatements");
const { processResourceStatements } = require("./processResourceStatements");

module.exports = {
  readText,
  groupStatements,
  processDefinitionStatements,
  processResourceStatements,
};
