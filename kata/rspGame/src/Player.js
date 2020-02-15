class Player {
  constructor(name, handOptions) {
    if (typeof name !== "string" || !Array.isArray(handOptions)) {
      throw new Error("Invalid constructor: Unable to create Player instance");
    }
    this.name = name;
    this.handOptions = handOptions;
  }
}

class HumanPlayer extends Player {
  constructor(name, handOptions) {
    super(name, handOptions);
    this.playerType = "human";
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
