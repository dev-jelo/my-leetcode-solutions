// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let tri = [[1], [1,1]];
    if (rowIndex < 2) {
        return tri[rowIndex] 
    } else {
        tri.shift();
        for(let i = 1; i < rowIndex; i++) {
            const prev = tri.pop();
            let temp = [1];
            for (let i = 1; i < prev.length; i++) {
                let j = i - 1;
                temp.push(prev[i] + prev[j]);
            }
            temp.push(1);
            tri.push(temp);
        }
    }
    return tri[0];
};