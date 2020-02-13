const {
  inputReader,
  splitStatement,
  extractTranslationData,
  extractResourcePriceData,
  calculatePrice,
  extractQueryData,
  answerQuestion
} = require("./utils");
const UnitConverter = require("./UnitConverter");
const converter = new UnitConverter();
const Shop = require("./Shop");
const shop = new Shop();

const inputProcessor = inputFileDir => {
  try {
    const statementArray = inputReader(inputFileDir);

    const {
      translationStatement,
      resourcePriceStatement,
      queryStatement
    } = splitStatement(statementArray);

    const translationData = extractTranslationData(translationStatement);
    converter.addUnits(translationData);

    const resourcePriceData = extractResourcePriceData(resourcePriceStatement);
    const itemPricesData = calculatePrice(resourcePriceData, converter);
    shop.addItems(itemPricesData);

    const queryData = extractQueryData(queryStatement);
    const answer = answerQuestion(queryData, converter, shop);
    return answer;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = inputProcessor;
