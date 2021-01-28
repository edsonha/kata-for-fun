const { readText } = require("./readText");
const { groupStatements } = require("./groupStatements");
const {
  processDefinitionStatements,
} = require("./processDefinitionStatements");

module.exports = { readText, groupStatements, processDefinitionStatements };
