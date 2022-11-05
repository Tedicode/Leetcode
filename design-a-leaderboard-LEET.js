var Leaderboard = function () {
  this.scoreBoard = {};
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.scoreBoard[playerId]) this.scoreBoard[playerId] = score;
  else this.scoreBoard[playerId] += score;
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  let allScores = Object.values(this.scoreBoard).sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < K; i++) sum += allScores.pop();
  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.scoreBoard[playerId] = 0;
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
