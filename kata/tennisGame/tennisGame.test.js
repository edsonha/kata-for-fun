const TennisGame = require("./tennisGame");

describe("Tennis Game", () => {
  it("should return the 2 players names when the game is started by John and Alice", () => {
    const tennisGame = new TennisGame("John", "Alice");
    expect(tennisGame.playerOne).toBe("John");
    expect(tennisGame.playerTwo).toBe("Alice");
  });

  it('should return "Love all" when the game is started', () => {
    const tennisGame = new TennisGame("player1", "player2");
    expect(tennisGame.getScore()).toBe("Love all");
    expect(tennisGame.seeScore()).toEqual([0, 0]);
  });

  it('should return "Fifteen,Love" and score of [15, 0] when player 1 score first point', () => {
    const tennisGame = new TennisGame("player1", "player2");
    tennisGame.playerOneScoresPoint();
    expect(tennisGame.getScore()).toBe("Fifteen,Love");
    expect(tennisGame.seeScore()).toEqual([15, 0]);
  });

  it('should return "Fifteen all" and score of [15, 15] when both player score first point', () => {
    const tennisGame = new TennisGame("player1", "player2");
    tennisGame.playerOneScoresPoint();
    tennisGame.playerTwoScoresPoint();
    expect(tennisGame.getScore()).toBe("Fifteen all");
    expect(tennisGame.seeScore()).toEqual([15, 15]);
  });

  it('should return "Love,Thirty" and score of [0, 30] when player 2 score two points', () => {
    const tennisGame = new TennisGame("player1", "player2");
    tennisGame.playerTwoScoresPoint();
    tennisGame.playerTwoScoresPoint();
    expect(tennisGame.getScore()).toBe("Love,Thirty");
    expect(tennisGame.seeScore()).toEqual([0, 30]);
  });

  it('should return "Forty,Love" and score of [40, 0] when the score is [3, 0] for player 1 and player 2 respectively', () => {
    const tennisGame = new TennisGame("player1", "player2");
    tennisGame.createScore(3, 0);
    expect(tennisGame.getScore()).toBe("Forty,Love");
    expect(tennisGame.seeScore()).toEqual([40, 0]);
  });

  it('should return "Deuce" and score of [40, 40] when the score is [3, 3] for player 1 and player 2 respectively', () => {
    const tennisGame = new TennisGame("player1", "player2");
    tennisGame.createScore(3, 3);
    expect(tennisGame.getScore()).toBe("Deuce");
    expect(tennisGame.seeScore()).toEqual([40, 40]);
  });

  it('should return "John win" when the score is [4, 0] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(4, 0);
    expect(tennisGame.getScore()).toBe("John win");
  });

  it('should return "Alice win" when the score is [1, 4] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(1, 4);
    expect(tennisGame.getScore()).toBe("Alice win");
  });

  it('should return "Deuce" and score of [40, 40] when the score is [4, 4] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(4, 4);
    expect(tennisGame.getScore()).toBe("Deuce");
    expect(tennisGame.seeScore()).toEqual([40, 40]);
  });

  it('should return "Alice advantage" and score of [40, A] when the score is [4, 5] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(4, 5);
    expect(tennisGame.getScore()).toBe("Alice advantage");
    expect(tennisGame.seeScore()).toEqual([40, "A"]);
  });

  it('should return "John advantage" and score of [A, 40] when the score is [6, 5] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(6, 5);
    expect(tennisGame.getScore()).toBe("John advantage");
    expect(tennisGame.seeScore()).toEqual(["A", 40]);
  });

  it('should return "Alice win" when the score is [6, 8] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(6, 8);
    expect(tennisGame.getScore()).toBe("Alice win");
  });

  it('should return "John win" when the score is [10, 8] for John and Alice respectively', () => {
    const tennisGame = new TennisGame("John", "Alice");
    tennisGame.createScore(10, 8);
    expect(tennisGame.getScore()).toBe("John win");
  });

  it("should return error when the create score method has parameter that is not a number", () => {
    const tennisGame = new TennisGame("John", "Alice");
    expect(() => tennisGame.createScore(2, "Random")).toThrowError(
      "Please enter only numbers"
    );
  });
});
