// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 10 && x >= 0) return true;
    if (x < 0) return false;
    if (x < 100 && !(x % 11)) return true;
    
    let arr = String(x).split('');
    let halfF, halfS, half;
    if (arr.length % 2) {
        half = Math.ceil(arr.length / 2);
        halfF = arr.slice(0, half - 1);
    } else {
        half = arr.length / 2;
        halfF = arr.slice(0, half);
    };

    halfS = arr.slice(half);
    half = halfS.length - 1;
    for (let i = 0; i < arr.length; i++, half--) {
        if (halfF[i] !== halfS[half]) return false;
    }
    return true;
};