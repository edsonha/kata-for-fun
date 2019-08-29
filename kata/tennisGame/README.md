# Tennis Game

This Kata is about implementing a simple tennis game.

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
3. If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Examples:

Test Scenarios

- score(0, 0) → ("Love all", [0, 0])
- score(1, 0) → ("Fifteen,Love", [15, 0])
- score(1, 1) → ("Fifteen all", [15, 15])
- score(0, 2) → ("Love,Thirty", [0, 30])
- score(3, 0) → ("Forty,Love", [40, 0])
- score(3, 3) → ("Deuce", [40, 40])
- score(4, 0) → ("Player 1 win")
- score(1, 4) → ("Player 2 win")
- score(4, 4) → ("Deuce", [40, 40])
- score(4, 5) → ("Player 2 advantage", [40, A])
- score(6, 5) → ("Player 1 advantage", [A, 40])
- score(6, 8) → ("Player 2 win")
- score(10, 8) → ("Player 1 win")
