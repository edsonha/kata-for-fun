const { HAND_OPTIONS } = require("../constants");

const isHandOptionInvalid = (player1Hand, player2Hand) => {
  if (
    !HAND_OPTIONS.includes(player1Hand) ||
    !HAND_OPTIONS.includes(player2Hand)
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = isHandOptionInvalid;
