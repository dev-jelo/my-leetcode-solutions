// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let started = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (started) {
            if (s[i] == ' ') {
                break;
            } else {
                count++;
            }
        } else if (s[i] !== ' ') {
            started = true;
            count++;
        }
    }
    return count;
};