/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  let m = board.length;
  let n = board[0].length;

  let needsCrush = true;

  while (needsCrush) {
    needsCrush = false;

    // check horizontally if needs to be crushed
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n - 2; j++) {
        if (
          Math.abs(board[i][j]) === Math.abs(board[i][j + 1]) &&
          Math.abs(board[i][j]) === Math.abs(board[i][j + 2]) &&
          Math.abs(board[i][j]) !== 0
        ) {
          board[i][j] =
            board[i][j + 1] =
            board[i][j + 2] =
              -1 * Math.abs(board[i][j]);
          needsCrush = true;
        }
      }
    }

    // check vertically if needs to be crushed
    for (let i = 0; i < m - 2; i++) {
      for (let j = 0; j < n; j++) {
        if (
          Math.abs(board[i][j]) === Math.abs(board[i + 1][j]) &&
          Math.abs(board[i][j]) === Math.abs(board[i + 2][j]) &&
          Math.abs(board[i][j]) !== 0
        ) {
          board[i][j] =
            board[i + 1][j] =
            board[i + 2][j] =
              -1 * Math.abs(board[i][j]);
          needsCrush = true;
        }
      }
    }

    console.log(board);

    // crush
    for (let j = 0; j < n; j++) {
      let anchor_i = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] > 0) {
          board[anchor_i][j] = board[i][j];
          anchor_i = anchor_i - 1;
        }
      }

      for (let i = 0; i < anchor_i + 1; i++) {
        board[i][j] = 0;
      }
    }
  }

  // once board is in stable state (exits while loop b/c 'needsCrush' is no longer true)
  return board;
};
