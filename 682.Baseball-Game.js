// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.
// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = [];
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'C':
                res.pop()
                break
            case 'D':
                res.push(res[res.length - 1] * 2)
                break
            case '+':
                res.push(res[res.length - 2] + res[res.length - 1])
                break
            default:
                res.push(Number(operations[i]))
        }   
    }
    return res.reduce((acc, cur) => acc + cur, 0)
};