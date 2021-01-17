const groupStatements = (statements) => {
  let group = {
    definitionStatements: [],
    resourceStatements: [],
    queryStatements: [],
  };
  statements.forEach((statement) => {
    if (statement.match(/is [IVXLCDM]/gi)) {
      group.definitionStatements.push(statement);
    }
    if (statement.endsWith("Credits")) {
      group.resourceStatements.push(statement);
    }
    if (statement.match(/[?]/g)) {
      group.queryStatements.push(statement);
    }
  });
  return group;
};

module.exports = { groupStatements };
