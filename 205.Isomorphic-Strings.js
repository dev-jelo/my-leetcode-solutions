// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sList = {};
    let sCount = 0;
    let tList = {};
    let tCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (sList[s[i]] == undefined) {
            sList[s[i]] = sCount;
            sCount++;
        }
        if (tList[t[i]] == undefined) {
            tList[t[i]] = tCount;
            tCount++;
        }
        if (sList[s[i]] != tList[t[i]]) return false;
    }
    return true;
};