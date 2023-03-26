// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let st = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    let half = Math.floor(st.length / 2);
    let i = 0;
    while(i !== half) {
        if (st[i] != st[st.length - 1 - i]) return false;
        i++;
    }
    return true;
};