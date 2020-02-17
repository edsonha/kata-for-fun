const CLInterface = require("../src/CLInterface");
const mockInterface = new CLInterface();
const inquirer = require("inquirer");

jest.mock("inquirer");

afterEach(() => {
  jest.resetAllMocks();
});

describe("Command Line Interface", () => {
  describe("Ask Hand Action method", () => {
    it("should return the chosen option given by prompt from inquirer.js", async () => {
      inquirer.prompt
        .mockResolvedValueOnce({ humanAction: "rock" })
        .mockResolvedValueOnce({ humanAction: "paper" })
        .mockResolvedValueOnce({ humanAction: "scissors" });
      const firstAnswer = await mockInterface.askHandAction();
      expect(firstAnswer).toBe("rock");
      const secondAnswer = await mockInterface.askHandAction();
      expect(secondAnswer).toBe("paper");
      const thirdAnswer = await mockInterface.askHandAction();
      expect(thirdAnswer).toBe("scissors");
    });
  });
});
