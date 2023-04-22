// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
// Count and return the number of maximum integers in the matrix after performing all the operations.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;

    let max = ops[0][0] * ops[0][1];
    let prev = ops[0];
    for (let i = 1; i < ops.length; i++) {
        if (ops[i][0] < prev[0] && ops[i][1] < prev[1]) {
            max = ops[i][0] * ops[i][1];
            prev = ops[i];
        } else if (ops[i][0] < prev[0]) {
            max = ops[i][0] * prev[1];
            prev = [ops[i][0], prev[1]];
        } else if (ops[i][1] < prev[1]){
            max = ops[i][1] * prev[0];
            prev = [prev[0], ops[i][1]];
        }
    }

    return max;
};