// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] == 'a' || s[l] == 'e' || s[l] == 'i' ||s[l] == 'o' ||s[l] == 'u' ||
            s[l] == 'A' || s[l] == 'E' || s[l] == 'I' ||s[l] == 'O' ||s[l] == 'U') {
            if (s[r] == 'a' || s[r] == 'e' || s[r] == 'i' ||s[r] == 'o' ||s[r] == 'u' || 
                s[r] == 'A' || s[r] == 'E' || s[r] == 'I' ||s[r] == 'O' ||s[r] == 'U') {
                [s[l], s[r]] = [s[r], s[l]];
                r--;
            } else {
                r--;
                continue;
            }
        }
        l++;
    }
    return s.join('');
};