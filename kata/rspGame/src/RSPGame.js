const isHandOptionInvalid = require("./utils/isHandOptionInvalid");

class RSPGame {
  constructor(player1, player2, winRule) {
    if (
      typeof player1 !== "object" ||
      typeof player2 !== "object" ||
      typeof winRule !== "object" ||
      !player1 ||
      !player2 ||
      !winRule ||
      Array.isArray(player1) ||
      Array.isArray(player2) ||
      Array.isArray(winRule) ||
      Object.entries(winRule).length === 0
    ) {
      throw new Error("Invalid constructor: Unable to create RSPGame instance");
    }
    this.player1 = player1;
    this.player2 = player2;
    this.winRule = winRule;
    this.result = "";
  }

  compareHand(player1Hand, player2Hand) {
    if (typeof player1Hand !== "string" || typeof player2Hand !== "string") {
      throw new Error("Compare Hand method: Invalid inputs");
    }
    if (isHandOptionInvalid(player1Hand, player2Hand)) {
      throw new Error("Compare Hand method: Input is not recognized");
    }
    if (player1Hand === player2Hand) {
      return "Draw";
    } else if (this.winRule[player1Hand].includes(player2Hand)) {
      return "Player1";
    } else {
      return "Player2";
    }
  }
}

module.exports = RSPGame;
