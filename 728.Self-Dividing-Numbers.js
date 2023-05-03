// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let t = true;
        let c = `${i}`
        for (let j = 0; j < c.length; j++) {
            if (i % c[j] !== 0) {
                t = false
                break
            }
        }
        if (t) result.push(i)
    }
    return result
};