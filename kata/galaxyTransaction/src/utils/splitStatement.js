const {
  TRANSLATION_STATEMENT_VALIDATOR_REGEX,
  RESOURCE_PRICE_STATEMENT_VALIDATOR_REGEX,
  QUERY_STATEMENT_VALIDATOR_REGEX
} = require("../constants");

const splitStatement = inputArr => {
  if (!Array.isArray(inputArr)) {
    throw new Error("Split statement: Argument is not valid");
  }

  const translationStatement = [];
  const resourcePriceStatement = [];
  const queryStatement = [];

  for (let statement of inputArr) {
    if (typeof statement === "string") {
      const isTranslationStatement = statement.match(
        TRANSLATION_STATEMENT_VALIDATOR_REGEX
      );
      const isResourcePriceStatement = statement.match(
        RESOURCE_PRICE_STATEMENT_VALIDATOR_REGEX
      );
      const isQueryStatement = statement.match(QUERY_STATEMENT_VALIDATOR_REGEX);
      if (isTranslationStatement) translationStatement.push(statement);
      if (isResourcePriceStatement) resourcePriceStatement.push(statement);
      if (isQueryStatement) queryStatement.push(statement);
    }
  }
  return { translationStatement, resourcePriceStatement, queryStatement };
};

module.exports = splitStatement;
