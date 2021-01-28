const processDefinitionStatements = (statements) => {
  const definitionDictionary = {};
  statements.forEach((statement) => {
    const splitStatement = statement.split(" ");
    const key = splitStatement[0];
    const value = splitStatement[2];
    definitionDictionary[key] = value;
  });
  return definitionDictionary;
};

module.exports = { processDefinitionStatements };
