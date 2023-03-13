// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const ref = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            if (s[i + 1] === 'V') {
                total += 4;
                i++;
            } else if (s[i + 1] === 'X') {
                total += 9;
                i++;
            } else {
                total += 1;
            }
            continue;
        } else if (s[i] === 'X') {
            if (s[i + 1] === 'L') {
                total += 40;
                i++;
            } else if (s[i + 1] === 'C') {
                total += 90;
                i++;
            } else {
                total += 10;
            }
            continue;
        } else if (s[i] === 'C') {
            if (s[i + 1] === 'D') {
                total += 400;
                i++;
            } else if (s[i + 1] === 'M') {
                total += 900;
                i++;
            } else {
                total += 100;
            }
            continue;
        } else {
            total += ref[s[i]];
        }
    }
    return total;
};