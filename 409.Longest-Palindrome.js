// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let list = {};
    for (let i = 0; i < s.length; i++) {
        if (list[s[i]] == undefined) {
            list[s[i]] = 1;
        } else {
            list[s[i]]++;
        }
    }
    let res = 0;
    for (let k in list) {
        while (list[k] > 1) {
            list[k] -= 2;
            res += 2;
        }
        if (list[k] == 0) delete list[k];
    }
    return res + (Object.keys(list).length ? 1 : 0);
};