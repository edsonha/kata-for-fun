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
  chosenGame === "ComVsCom"
    ? intializeComVsComGame()
    : intializeHumanVsComGame();
};

const intializeComVsComGame = () => {
  const comVsCom = new RSPGame(cpu, computer, WIN_RULE);
  comVsCom.playGame();
  const { player1Hand, player2Hand, player1, player2 } = comVsCom;
  comVsCom.compareHand(player1Hand, player2Hand);
  const { result } = comVsCom;
  console.log(
    `${player1.name} choose ${player1Hand}\n${player2.name} choose ${player2Hand}\nResult is ${result}`
  );
};

// const intializeHumanVsComGame = () => {
//   const humanVsCom = new RSPGame(human, computer, WIN_RULE);
//   humanVsCom.playGame();
//   humanVsCom.compareHand(humanVsCom.player1Hand, humanVsCom.player2Hand);
//   console.log(
//     `${humanVsCom.player1.name} choose ${humanVsCom.player1Hand}\n${humanVsCom.player2.name} choose ${humanVsCom.player2Hand}\nResult is ${humanVsCom.result}`
//   );
// };

startGame();
