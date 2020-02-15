const RSPGame = require("../src/RSPGame");
const { HumanPlayer, ComPlayer } = require("../src/Player");
const CLInterface = require("../src/CLInterface");

const mockCLInterface = new CLInterface();
const mockHandOptions = ["rock", "scissors", "paper"];

const human = new HumanPlayer("Alice", mockHandOptions, mockCLInterface);
const computer = new ComPlayer("Watson", mockHandOptions);
const cpu = new ComPlayer("Intel", mockHandOptions);

const humanVsCom = new RSPGame(human, computer);
const comVsCom = new RSPGame(cpu, computer);

describe("Rock Scissors Paper Game", () => {
  describe("Instance", () => {
    it("should be created only with 2 Players class object", () => {
      const errMsg = "Invalid constructor: Unable to create RSPGame instance";
      expect(() => new RSPGame()).toThrow(errMsg);
      expect(() => new RSPGame("player1", "player2")).toThrow(errMsg);
      expect(() => new RSPGame(human, "player2")).toThrow(errMsg);
      expect(() => new RSPGame(human, 8)).toThrow(errMsg);
      expect(() => new RSPGame(human, null)).toThrow(errMsg);
      expect(() => new RSPGame(human, true)).toThrow(errMsg);
      expect(() => new RSPGame(human, undefined)).toThrow(errMsg);
      expect(() => new RSPGame(human, [])).toThrow(errMsg);
      expect(() => new RSPGame(human, computer)).not.toThrow(errMsg);
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
        expect(comVsCom.result).toBe("");
      });
    });
  });
});
