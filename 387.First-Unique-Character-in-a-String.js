// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let l = {};
    for (let i = 0; i < s.length; i++) {
        if (l[s[i]] == undefined) {
            l[s[i]] = 1;
        } else {
            l[s[i]] = 2;
        }
    };
    for (let i = 0; i < s.length; i++) {
        if (l[s[i]] == 1) return i; 
    };
    return -1;
};