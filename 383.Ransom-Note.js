// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magL = {};
    for (let i = 0; i < magazine.length; i++) {
        if (magL[magazine[i]] == undefined) {
            magL[magazine[i]] = 1;
        } else {
            magL[magazine[i]]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magL[ransomNote[i]]) {
            return false;
        } else {
            magL[ransomNote[i]]--;
        }
    }
    return true;
};