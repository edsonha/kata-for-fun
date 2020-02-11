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
    const [galaticNum, romanNum] = translationData;
    unitObjects[galaticNum] = romanNum;
  }

  return unitObjects;
};

module.exports = extractTranslationData;
