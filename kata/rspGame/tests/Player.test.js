const { Player, HumanPlayer, ComPlayer } = require("../src/Player");
const CLInterface = require("../src/CLInterface");

const mockCLInterface = new CLInterface();
mockCLInterface.askHandAction = jest.fn();

const mockHandOptions = ["rock", "scissors", "paper"];

const human = new HumanPlayer("Alice", mockHandOptions, mockCLInterface);
const computer = new ComPlayer("Watson", mockHandOptions);

describe("Player", () => {
  describe("Instance", () => {
    it("should be created from Player class", () => {
      const player = new Player("Alice", mockHandOptions);
      expect(player).toBeInstanceOf(Player);
    });

    it("should have name and hand options as player's property", () => {
      const player = new Player("Alice", mockHandOptions);
      expect(player.name).toBe("Alice");
      expect(player.handOptions).toEqual(mockHandOptions);
    });

    it("should not be created when the name input is not a string or empty", () => {
      const errMsg = "Invalid constructor: Unable to create Player instance";
      expect(() => new Player(mockHandOptions)).toThrow(errMsg);
      expect(() => new Player(8, mockHandOptions)).toThrow(errMsg);
      expect(() => new Player([], mockHandOptions)).toThrow(errMsg);
      expect(() => new Player({}, mockHandOptions)).toThrow(errMsg);
      expect(() => new Player(null, mockHandOptions)).toThrow(errMsg);
      expect(() => new Player(true, mockHandOptions)).toThrow(errMsg);
      expect(() => new Player(undefined, mockHandOptions)).toThrow(errMsg);
      expect(() => new Player("Alice", mockHandOptions)).not.toThrow(errMsg);
    });

    it("should not be created when the hand options input is not an array or empty", () => {
      const errMsg = "Invalid constructor: Unable to create Player instance";
      expect(() => new Player("Alice")).toThrow(errMsg);
      expect(() => new Player("Alice", 8)).toThrow(errMsg);
      expect(() => new Player("Alice", "handOptions")).toThrow(errMsg);
      expect(() => new Player("Alice", {})).toThrow(errMsg);
      expect(() => new Player("Alice", null)).toThrow(errMsg);
      expect(() => new Player("Alice", true)).toThrow(errMsg);
      expect(() => new Player("Alice", undefined)).toThrow(errMsg);
    });
  });
});

describe("Human Player", () => {
  describe("Instance", () => {
    it("should be created from Human Player class which is extended from Player Class", () => {
      expect(human).toBeInstanceOf(Player);
      expect(human).toBeInstanceOf(HumanPlayer);
      expect(human.name).toBe("Alice");
      expect(human.handOptions).toEqual(mockHandOptions);
      expect(human.playerType).toBe("human");
      expect(human.humanInterface).toBe(mockCLInterface);
    });

    it("should not be created when the human interface input is empty or not a Class", () => {
      const errMsg =
        "Invalid interface: Unable to create Human Player instance";
      expect(() => new HumanPlayer("Alice", mockHandOptions)).toThrow(errMsg);
      expect(() => new HumanPlayer("Alice", mockHandOptions, 8)).toThrow(
        errMsg
      );
      expect(
        () => new HumanPlayer("Alice", mockHandOptions, "interface")
      ).toThrow(errMsg);
      expect(() => new HumanPlayer("Alice", mockHandOptions, [])).toThrow(
        errMsg
      );
      expect(() => new HumanPlayer("Alice", mockHandOptions, null)).toThrow(
        errMsg
      );
      expect(() => new HumanPlayer("Alice", mockHandOptions, true)).toThrow(
        errMsg
      );
      expect(
        () => new HumanPlayer("Alice", mockHandOptions, undefined)
      ).toThrow(errMsg);
    });
  });

  describe("Get Action", () => {
    it("should get human hand action based on human interface question", () => {
      mockCLInterface.askHandAction = jest.fn(() => "rock");
      expect(human.getAction()).toBe("rock");
      mockCLInterface.askHandAction = jest.fn(() => "paper");
      expect(human.getAction()).toBe("paper");
      mockCLInterface.askHandAction = jest.fn(() => "scissors");
      expect(human.getAction()).toBe("scissors");
    });
  });
});

describe("Computer Player", () => {
  describe("Instance", () => {
    it("should be created from Computer Player class which is extended from Player Class", () => {
      expect(computer).toBeInstanceOf(Player);
      expect(computer).toBeInstanceOf(ComPlayer);
      expect(computer).not.toBeInstanceOf(HumanPlayer);
      expect(computer.name).toBe("Watson");
      expect(computer.handOptions).toEqual(mockHandOptions);
      expect(computer.playerType).toBe("computer");
    });
  });

  describe("Get Action", () => {
    it("should get computer hand action based on Math.random mock", () => {
      global.Math.random = () => 0.3;
      expect(computer.getAction()).toBe("rock");
      global.Math.random = () => 0.6;
      expect(computer.getAction()).toBe("scissors");
      global.Math.random = () => 0.9;
      expect(computer.getAction()).toBe("paper");
    });
  });
});
