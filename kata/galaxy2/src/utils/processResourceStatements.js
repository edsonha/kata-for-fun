const processResourceStatements = (resourceStatements, dictionary) => {
  const resourceInfo = {};
  resourceStatements.forEach((statement) => {
    const data = statement
      .replace(/\sCredits/, "")
      .replace(/is\s/, "")
      .split(/\s(?=[A-Z])|\s(?=[1-9])/);
    const resource = data[1];
    const totalUnit = data[0];
    const totalCredits = data[2];
    const unitPrice = totalCredits / dictionary.toArabic(totalUnit);
    resourceInfo[resource] = unitPrice;
  });
  return resourceInfo;
};

module.exports = { processResourceStatements };
