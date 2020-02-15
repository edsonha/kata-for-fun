const WIN_RULE = {
  rock: ["scissors", "lizard"],
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
};

const HAND_OPTIONS = Object.keys(WIN_RULE);

module.exports = { WIN_RULE, HAND_OPTIONS };
