const extractResourcePriceData = resourcePriceStatementArr => {
  if (!Array.isArray(resourcePriceStatementArr)) {
    throw new Error("Extract resource price data: Argument is not valid");
  }

  const resourcePriceDataArr = [];
  for (let statement of resourcePriceStatementArr) {
    if (typeof statement !== "string" || !statement.includes("Credits")) {
      throw new Error("Extract resource price data: Statement is not valid");
    }
    const infoArr = statement
      .replace(/\sCredits/, "")
      .replace(/is\s/, "")
      .split(/\s(?=[A-Z])|\s(?=[1-9])/);
    resourcePriceDataArr.push(infoArr);
  }

  return resourcePriceDataArr;
};

module.exports = extractResourcePriceData;
