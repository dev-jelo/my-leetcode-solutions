// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]]++;
        } else {
            letters[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!letters[t[i]]) {
            return false;
        } else {
            letters[t[i]]--;
        }
    }

    return true;
};