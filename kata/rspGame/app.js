const CLInterface = require("./src/CLInterface");
const RSPGame = require("./src/RSPGame");
const { HAND_OPTIONS, WIN_RULE } = require("./src/constants");
const { HumanPlayer, ComPlayer } = require("./src/Player");

const clInterface = new CLInterface();
const human = new HumanPlayer("You", HAND_OPTIONS, clInterface);
const computer = new ComPlayer("Watson", HAND_OPTIONS);
const cpu = new ComPlayer("Intel", HAND_OPTIONS);

const startGame = async () => {
  const chosenGame = await clInterface.createGame();
  chosenGame === "ComVsCom" ? playComVsComGame() : playHumanVsComGame();
};

const playComVsComGame = async () => {
  const comVsCom = new RSPGame(cpu, computer, WIN_RULE);
  const [player1Hand, player2Hand] = await comVsCom.playGame();
  comVsCom.compareHand(player1Hand, player2Hand);
  const { player1, player2, result } = comVsCom;
  console.log(
    `${player1.name} choose ${player1Hand}\n${player2.name} choose ${player2Hand}\nResult is ${result}`
  );
};

const playHumanVsComGame = async () => {
  const humanVsCom = new RSPGame(human, computer, WIN_RULE);
  const [humanHand, comHand] = await humanVsCom.playGame();
  humanVsCom.compareHand(humanHand, comHand);
  const { player1, player2, result } = humanVsCom;
  console.log(
    `${player1.name} choose ${humanHand}\n${player2.name} choose ${comHand}\nResult is ${result}`
  );
};

startGame();
