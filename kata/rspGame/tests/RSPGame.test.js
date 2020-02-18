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

let humanVsCom;
let comVsCom;
beforeEach(() => {
  humanVsCom = new RSPGame(human, computer, mockWinRule);
  comVsCom = new RSPGame(cpu, computer, mockWinRule);
});

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
        humanVsCom.compareHand("rock", "rock");
        expect(humanVsCom.result).toBe("Draw");
        humanVsCom.compareHand("paper", "paper");
        expect(humanVsCom.result).toBe("Draw");
        humanVsCom.compareHand("scissors", "paper");
        expect(humanVsCom.result).toBe("Alice the Player 1 Win");
        humanVsCom.compareHand("paper", "rock");
        expect(humanVsCom.result).toBe("Alice the Player 1 Win");
        humanVsCom.compareHand("rock", "paper");
        expect(humanVsCom.result).toBe("Watson the Player 2 Win");
        humanVsCom.compareHand("paper", "scissors");
        expect(humanVsCom.result).toBe("Watson the Player 2 Win");
      });
    });

    describe("Show Result method", () => {
      it("should throw error when the result is empty string", () => {
        expect(() => humanVsCom.showResult()).toThrow(
          "Show Result method: No result shown"
        );
      });

      it("should show game result after every round", () => {
        humanVsCom.compareHand("rock", "rock");
        expect(humanVsCom.showResult()).toBe("Draw");
        humanVsCom.compareHand("rock", "scissors");
        expect(humanVsCom.showResult()).toBe("Alice the Player 1 Win");
        humanVsCom.compareHand("scissors", "rock");
        expect(humanVsCom.showResult()).toBe("Watson the Player 2 Win");
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
        expect(humanVsCom.player1Hand).toBe("");
        expect(humanVsCom.player2Hand).toBe("");
        expect(humanVsCom.result).toBe("");
      });
    });

    describe("Play Game method", () => {
      it("should invoke two players - human and computer to get a hand action and store it in player1Hand and player2Hand state", async () => {
        mockCLInterface.askHandAction = jest.fn(() => "rock");
        humanVsCom.player2.getAction = jest.fn(() => "rock");
        await humanVsCom.playGame();
        expect(humanVsCom.player1Hand).toBe("rock");
        expect(humanVsCom.player2Hand).toBe("rock");
        mockCLInterface.askHandAction = jest.fn(() => "paper");
        humanVsCom.player2.getAction = jest.fn(() => "scissors");
        await humanVsCom.playGame();
        expect(humanVsCom.player1Hand).toBe("paper");
        expect(humanVsCom.player2Hand).toBe("scissors");
        mockCLInterface.askHandAction = jest.fn(() => "scissors");
        humanVsCom.player2.getAction = jest.fn(() => "paper");
        await humanVsCom.playGame();
        expect(humanVsCom.player1Hand).toBe("scissors");
        expect(humanVsCom.player2Hand).toBe("paper");
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
        expect(comVsCom.player1Hand).toBe("");
        expect(comVsCom.player2Hand).toBe("");
        expect(comVsCom.result).toBe("");
      });
    });

    describe("Play Game method", () => {
      it("should invoke two computer players to get a hand action and store it in player1Hand and player2Hand state", async () => {
        comVsCom.player1.getAction = jest.fn(() => "rock");
        comVsCom.player2.getAction = jest.fn(() => "paper");
        await comVsCom.playGame();
        expect(comVsCom.player1Hand).toBe("rock");
        expect(comVsCom.player2Hand).toBe("paper");
        comVsCom.player1.getAction = jest.fn(() => "paper");
        comVsCom.player2.getAction = jest.fn(() => "scissors");
        await comVsCom.playGame();
        expect(comVsCom.player1Hand).toBe("paper");
        expect(comVsCom.player2Hand).toBe("scissors");
        comVsCom.player1.getAction = jest.fn(() => "scissors");
        comVsCom.player2.getAction = jest.fn(() => "rock");
        await comVsCom.playGame();
        expect(comVsCom.player1Hand).toBe("scissors");
        expect(comVsCom.player2Hand).toBe("rock");
      });
    });
  });
});
