// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = Math.floor(s.length / 2);
    for (let i = 0; i < len; i++) {
        let sub = s.slice(0, i + 1);
        let c = i + 1;
        while (c < s.length) {
            let temp = s.slice(c, c + sub.length);
            if (temp != sub) {break;}
            c += sub.length;
        }
        if (c == s.length) return true;
    }
    return false;
};