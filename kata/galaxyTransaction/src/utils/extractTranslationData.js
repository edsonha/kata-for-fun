const extractTranslationData = translationStatementArr => {
  if (!Array.isArray(translationStatementArr)) {
    throw new Error("Extract translation data: Argument is not valid");
  }

  const unitObjects = {};
  for (let statement of translationStatementArr) {
    if (typeof statement !== "string" || !statement.includes("is")) {
      throw new Error("Extract translation data: Statement is not valid");
    }
    const translationData = statement.split(" is ");
    unitObjects[translationData[0]] = translationData[1];
  }

  return unitObjects;
};

module.exports = extractTranslationData;
