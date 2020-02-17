const inquirer = require("inquirer");
const { HAND_OPTIONS } = require("./constants");

class CLInterface {
  constructor() {}

  async askHandAction() {
    const answer = await inquirer.prompt({
      type: "list",
      name: "humanAction",
      message: "What do you want to choose?",
      choices: HAND_OPTIONS
    });
    return answer.humanAction;
  }
}

module.exports = CLInterface;
