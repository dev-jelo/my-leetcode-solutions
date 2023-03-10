// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let test = '';
    let result = '';
    outer:
    for (let i = 0; i < strs[0].length; i++) {
        test = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== test) {
                break outer;
            };
        }
        result += test;
    }
    return result;
};