/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
  // NOTE :  THROWS ERROR.

  // outer loop will track whether or not the innerloop ran last time
  // (in which case, give that inner loop another run b/c there may be more work to do)

  // FIRST PASS / iteration will go across entire board and 'FALL'
  // for every position, check if position below it === 0
  // in fact, keep traversing down -  UNTIL position below does NOT === 0
  // then reassign that position with the falling number. And the original position to 0

  // SECOND PASS will iterate/explore every single node in the board (like islands), to 'BREAK':
  // perform BFS or DFS to check that node's neighbors. if node + 2 neighbors are the same AS IT,
  // (like island size >= 3), then set them all equal to 0
  // and set "crushed" variable to true (Signals to restart while loop to 'FALL' again)
  // When "crushed"/"changed" variable === false, this represents a stable board, that we can return.

  let changed = true;

  while (changed === true) {
    changed = false;

    // FIRST pass: 'FALL'  ( through 0's )
    let candy;
    let rowToPlace;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        candy = board[i][j];
        rowToPlace = i;
        while (
          rowToPlace < board.length - 1 &&
          board[rowToPlace + 1][j] === 0
        ) {
          rowToPlace++;
        }
        if (rowToPlace !== i) {
          changed = true;
          board[rowToPlace][j] = candy;
        }
      }
    }

    // SECOND pass: 'BREAK'  ( break up groups of 3+ adjacent nodes with same candy )
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        // TWO pieces of traversal code here to
        // 1. 'explore' neighbors and find out if 3 total adjacent === candy
        // 2. if yes, then traverse the entire "island" and crush (convert all to 0's)
        candy = board[i][j];
        if (candy !== 0 && explore(candy, i, j, board) >= 3) {
          // crush(candy, i,j,board)
          console.log(`found an island of candy type ${board[i][j]} `);
          // changed = true
        }
        // if 2 or more neighboring positions also === candy
        // then lets unleash traversal code that will mark all of them as zero
        // and set changed = true
      }
    }
  }

  // helper function to traverse the area and return count of same candy

  function explore(candy, i, j, board) {
    let rowInBounds = i >= 0 && i < board.length;
    let colInBounds = j >= 0 && j < board[0].length;

    // if position is out of bounds, or not the same candy, then ABORT
    if (visited.has(board[i][j])) return 0;
    if (!rowInBounds || !colInBounds) return 0;
    if (board[i][j] !== candy) return 0;

    // otherwise, can starting counting (self and neighbors)
    visited.add(board[i][j]);
    let count = 1;
    count += explore(candy, i - 1, j, board);
    count += explore(candy, i + 1, j, board);
    count += explore(candy, i, j - 1, board);
    count += explore(candy, i, j + 1, board);
    // and return count
    return count;
  }

  function crush(candy, i, j, board) {
    // traverse all neighbors
    // converting them to 0's
    // if they === candy, then convert them to 0
    // if they !== candy, then abort
    // (kind of like the traversal that only functions to mark visited)
  }

  return board;
};
