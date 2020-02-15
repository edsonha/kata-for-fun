const RSPGame = require("../src/RSPGame");
const { HumanPlayer, ComPlayer } = require("../src/Player");
const CLInterface = require("../src/CLInterface");

const mockCLInterface = new CLInterface();
mockCLInterface.askHandAction = jest.fn();
const mockHandOptions = ["rock", "scissors", "paper"];
const mockWinRule = {
  rock: ["scissors"],
  scissors: ["paper"],
  paper: ["rock"]
};

const human = new HumanPlayer("Alice", mockHandOptions, mockCLInterface);
const computer = new ComPlayer("Watson", mockHandOptions);
const cpu = new ComPlayer("Intel", mockHandOptions);

const humanVsCom = new RSPGame(human, computer, mockWinRule);
const comVsCom = new RSPGame(cpu, computer, mockWinRule);

describe("Rock Scissors Paper Game", () => {
  describe("Instance", () => {
    it("should be created only with 2 Players class object", () => {
      const errMsg = "Invalid constructor: Unable to create RSPGame instance";
      expect(() => new RSPGame()).toThrow(errMsg);
      expect(() => new RSPGame("player1", "player2")).toThrow(errMsg);
      expect(() => new RSPGame("player1", human)).toThrow(errMsg);
      expect(() => new RSPGame(human, 8)).toThrow(errMsg);
      expect(() => new RSPGame(null, human)).toThrow(errMsg);
      expect(() => new RSPGame(human, true)).toThrow(errMsg);
      expect(() => new RSPGame(undefined, human)).toThrow(errMsg);
      expect(() => new RSPGame(human, [])).toThrow(errMsg);
      expect(() => new RSPGame({}, human)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, mockWinRule)).not.toThrow(
        errMsg
      );
    });

    it("should be created only with Winning Rule class object", () => {
      const errMsg = "Invalid constructor: Unable to create RSPGame instance";
      expect(() => new RSPGame(human, computer)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, "winRule")).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, 8)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, null)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, true)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, undefined)).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, [])).toThrow(errMsg);
      expect(() => new RSPGame(human, computer, {})).toThrow(errMsg);
    });

    describe("Compare Hand method", () => {
      it("should throw error when there are less than 2 players' hands inputs or the inputs are not string", () => {
        const errMsg = "Compare Hand method: Invalid inputs";
        expect(() => humanVsCom.compareHand()).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("rock")).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("rock", 8)).toThrow(errMsg);
        expect(() => humanVsCom.compareHand(null, "rock")).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("rock", true)).toThrow(errMsg);
        expect(() => humanVsCom.compareHand(undefined, "rock")).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("rock", [])).toThrow(errMsg);
        expect(() => humanVsCom.compareHand({}, "rock")).toThrow(errMsg);
      });

      it("should throw error when the input is not recognized", () => {
        const errMsg = "Compare Hand method: Input is not recognized";
        expect(() => humanVsCom.compareHand("rock", "water")).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("water", "paper")).toThrow(errMsg);
        expect(() => humanVsCom.compareHand("water", "water")).toThrow(errMsg);
      });

      it("should evaluate 2 players' hands and evaluate the winner, loser or draw in human vs computer game", () => {
        expect(humanVsCom.compareHand("rock", "rock")).toBe("Draw");
        expect(humanVsCom.compareHand("paper", "paper")).toBe("Draw");
        expect(humanVsCom.compareHand("scissors", "paper")).toBe("Player1");
        expect(humanVsCom.compareHand("paper", "rock")).toBe("Player1");
        expect(humanVsCom.compareHand("rock", "paper")).toBe("Player2");
        expect(humanVsCom.compareHand("paper", "scissors")).toBe("Player2");
      });
    });
  });

  describe("Human Vs Computer Game", () => {
    describe("Instance", () => {
      it("should be created with Human Player and Computer Player class", () => {
        expect(humanVsCom).toBeInstanceOf(RSPGame);
        expect(humanVsCom.player1.playerType).toBe("human");
        expect(humanVsCom.player1.name).toBe("Alice");
        expect(humanVsCom.player1.handOptions).toBe(mockHandOptions);
        expect(humanVsCom.player1.humanInterface).toBe(mockCLInterface);
        expect(humanVsCom.player2.playerType).toBe("computer");
        expect(humanVsCom.player2.name).toBe("Watson");
        expect(humanVsCom.player2.handOptions).toBe(mockHandOptions);
        expect(humanVsCom.winRule).toEqual(mockWinRule);
        expect(humanVsCom.result).toBe("");
      });
    });
  });

  describe("Computer Vs Computer Game", () => {
    describe("Instance", () => {
      it("should be created with Computer Player and Computer Player class", () => {
        expect(comVsCom).toBeInstanceOf(RSPGame);
        expect(comVsCom.player1.playerType).toBe("computer");
        expect(comVsCom.player1.handOptions).toBe(mockHandOptions);
        expect(comVsCom.player2.playerType).toBe("computer");
        expect(comVsCom.player2.handOptions).toBe(mockHandOptions);
        expect(comVsCom.winRule).toEqual(mockWinRule);
        expect(comVsCom.result).toBe("");
      });
    });
  });
});
