/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let newGrid = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let nextRow = [];
    for (let k = 0; k < matrix.length; k++) {
      // build up a row
      nextRow.push(matrix[k][i]);
    }
    // push the row to the newGrid
    newGrid.push(nextRow);
  }

  return newGrid;
};
