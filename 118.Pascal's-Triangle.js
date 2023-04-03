// Given an integer numRows, return the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1], [1,1]];
    if (numRows == 1) {
        result.pop();
    } else {
        for(let i = 2; i < numRows; i++) {
            let temp = [1];
            const prev = result[result.length - 1];
            for (let i = 1; i < prev.length; i++) {
                let j = i - 1;
                temp.push(prev[i] + prev[j]);
            }
            temp.push(1);
            result.push(temp);
        }
    }
    return result;
};