class Player {
  constructor(name, handOptions) {
    if (
      typeof name !== "string" ||
      !Array.isArray(handOptions) ||
      !handOptions.length
    ) {
      throw new Error("Invalid constructor: Unable to create Player instance");
    }
    this.name = name;
    this.handOptions = handOptions;
  }
}

class HumanPlayer extends Player {
  constructor(name, handOptions, chosenInterface) {
    if (
      typeof chosenInterface !== "object" ||
      !chosenInterface ||
      Array.isArray(chosenInterface)
    ) {
      throw new Error(
        "Invalid interface: Unable to create Human Player instance"
      );
    }
    super(name, handOptions);
    this.playerType = "human";
    this.humanInterface = chosenInterface;
  }

  getAction() {
    const handAction = this.humanInterface.askHandAction();
    return handAction;
  }
}

class ComPlayer extends Player {
  constructor(name, handOptions) {
    super(name, handOptions);
    this.playerType = "computer";
  }

  getAction() {
    const randomIndex = Math.floor(Math.random() * this.handOptions.length);
    const handAction = this.handOptions[randomIndex];
    return handAction;
  }
}

module.exports = { Player, HumanPlayer, ComPlayer };
