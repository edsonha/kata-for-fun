const extractResourcePriceData = require("./extractResourcePriceData");
const extractTranslationData = require("./extractTranslationData");
const inputReader = require("./inputReader");
const splitStatement = require("./splitStatement");
const extractQueryData = require("./extractQueryData");
const calculatePrice = require("./calculatePrice");
const answerQuestion = require("./answerQuestion");

module.exports = {
  extractResourcePriceData,
  extractTranslationData,
  inputReader,
  splitStatement,
  extractQueryData,
  calculatePrice,
  answerQuestion
};
