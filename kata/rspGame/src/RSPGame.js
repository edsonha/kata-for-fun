class RSPGame {
  constructor(player1, player2) {
    if (
      typeof player1 !== "object" ||
      typeof player2 !== "object" ||
      !player1 ||
      !player2 ||
      Array.isArray(player1) ||
      Array.isArray(player2)
    ) {
      throw new Error("Invalid constructor: Unable to create RSPGame instance");
    }
    this.player1 = player1;
    this.player2 = player2;
    this.result = "";
  }
}

module.exports = RSPGame;
