// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix[0].length - 1; i++) {
      for (let j = 1; j < matrix.length; j++) {
        if (matrix[j][j + i] !== undefined && matrix[j][j + i] !== matrix[0][i]) return false
      }
    }
  
    for (let i = 1; i < matrix.length - 1; i++) {
      for (let j = 1; j + i < matrix.length && j < matrix[0].length; j++ ) {
        if (matrix[j + i][j] !== matrix[i][0]) return false
      }
    }
    return true
  };