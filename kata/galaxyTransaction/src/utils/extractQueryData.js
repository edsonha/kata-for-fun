const extractQueryData = queryStatementArr => {
  if (!Array.isArray(queryStatementArr)) {
    throw new Error("Extract query data: Argument is not valid");
  }

  const questionsData = [];
  for (let statement of queryStatementArr) {
    if (typeof statement !== "string" || statement.length === 0) {
      throw new Error("Extract query data: Statement is not valid");
    }

    const isConversionQuery = statement.toLowerCase().includes("how much is");
    const isItemPriceQuery = statement
      .toLowerCase()
      .includes("how many credits is");
    if (isConversionQuery) {
      const galacticNum = statement
        .replace(/how much is/gi, "")
        .replace(/\?/, "")
        .trim();
      questionsData.push([galacticNum]);
    } else if (isItemPriceQuery) {
      const [galaticNum, resource] = statement
        .replace(/how many credits is/gi, "")
        .replace(/\?/, "")
        .trim()
        .split(/\s(?=[A-Z])|\s(?=[1-9])/);
      questionsData.push([galaticNum, resource]);
    } else questionsData.push([null]);
  }

  return questionsData;
};

module.exports = extractQueryData;
