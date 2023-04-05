// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patList = {};
    let sList = Object.create(null);
    let patCount = 0;
    let sCount = 0;
    s = s.split(' ');
    if (pattern.length != s.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (patList[pattern[i]] == undefined) {
            patList[pattern[i]] = patCount;
            patCount++;
        } 
        if (sList[s[i]] == undefined) {
            sList[s[i]] = sCount;
            sCount++;
        }
        if (patList[pattern[i]] != sList[s[i]]) return false;
    }
    return true;
};