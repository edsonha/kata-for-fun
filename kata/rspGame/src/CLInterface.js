const inquirer = require("inquirer");
const { HAND_OPTIONS } = require("./constants");

class CLInterface {
  constructor() {}

  async createGame() {
    const answer = await inquirer.prompt({
      type: "list",
      name: "game",
      message: "What game do you want to choose?",
      choices: ["HumanVsCom", "ComVsCom"]
    });
    return answer.game;
  }

  async askHandAction() {
    const answer = await inquirer.prompt({
      type: "list",
      name: "humanAction",
      message: "What hand action do you want to choose?",
      choices: HAND_OPTIONS
    });
    return answer.humanAction;
  }
}

module.exports = CLInterface;
