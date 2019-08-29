module.exports = class TennisGame {
  constructor(playerOneName, playerTwoName) {
    this.playerOne = playerOneName;
    this.playerTwo = playerTwoName;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  getScore() {
    if (this.hasWinner()) {
      return this.playerWithHigherScore() + " win";
    } else if (this.hasAdvantage()) {
      return this.playerWithHigherScore() + " advantage";
    } else if (this.isDeuce()) {
      return "Deuce";
    } else if (this.playerOneScore === this.playerTwoScore) {
      return this.translateScore(this.playerOneScore) + " all";
    } else {
      return (
        this.translateScore(this.playerOneScore) +
        "," +
        this.translateScore(this.playerTwoScore)
      );
    }
  }

  seeScore() {
    if (this.isDeuce()) {
      return [40, 40];
    } else if (
      this.hasAdvantage() &&
      this.playerOneScore > this.playerTwoScore
    ) {
      return ["A", 40];
    } else if (
      this.hasAdvantage() &&
      this.playerOneScore < this.playerTwoScore
    ) {
      return [40, "A"];
    } else {
      return [
        this.modifyScore(this.playerOneScore),
        this.modifyScore(this.playerTwoScore)
      ];
    }
  }

  hasAdvantage() {
    if (
      this.playerOneScore >= 4 &&
      this.playerOneScore - this.playerTwoScore >= 1
    ) {
      return true;
    }
    if (
      this.playerTwoScore >= 4 &&
      this.playerTwoScore - this.playerOneScore >= 1
    ) {
      return true;
    }
    return false;
  }

  hasWinner() {
    if (
      this.playerOneScore >= 4 &&
      this.playerOneScore - this.playerTwoScore >= 2
    ) {
      return true;
    }
    if (
      this.playerTwoScore >= 4 &&
      this.playerTwoScore - this.playerOneScore >= 2
    ) {
      return true;
    }
    return false;
  }

  playerWithHigherScore() {
    if (this.playerOneScore > this.playerTwoScore) {
      return this.playerOne;
    } else {
      return this.playerTwo;
    }
  }

  isDeuce() {
    return (
      this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3
    );
  }

  playerOneScoresPoint() {
    this.playerOneScore++;
  }

  playerTwoScoresPoint() {
    this.playerTwoScore++;
  }

  modifyScore(score) {
    switch (score) {
      case 0:
        return 0;
      case 1:
        return 15;
      case 2:
        return 30;
      case 3:
        return 40;
    }
  }

  translateScore(score) {
    switch (score) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
    }
  }

  createScore(playerOneScore, playerTwoScore) {
    if (
      typeof playerOneScore !== "number" ||
      typeof playerTwoScore !== "number"
    ) {
      throw new Error("Please enter only numbers");
    }
    this.playerOneScore = playerOneScore;
    this.playerTwoScore = playerTwoScore;
  }
};
