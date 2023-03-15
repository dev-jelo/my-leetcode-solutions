// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let num = 1;
    while (num * num < x) {
        num++;
    }
    if (num * num > x) num--;
    return num;
};