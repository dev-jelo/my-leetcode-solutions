// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem.

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (!num) return `${num}`;
    if (num > 0) {
        let res = [];
        while (num != 0) {
            let rem = num % 16;
            num = Math.floor(num / 16);
            if (rem > 9) {
                res.unshift(String.fromCharCode(rem + 87));
            } else {
                res.unshift(rem);
            };
        }
        return res.join('');
    } else {
        num = num.toString(2).split('').slice(1);
        for (let i = 0; i < num.length; i++) {
            num[i] == 1 ? num[i] = 0 : num[i] = 1;
        }
        for (let i = num.length - 1; i >= 0; i--) {
            if (num[i] == 1) {
                num[i] = 0;
                if (i == 0) num.unshift(1);
            } else {
                num[i] = 1;
                break;
            }
        }
        let len = num.length;
        for (let i = 0; i < 32 - len; i++) {
            num.unshift(1);
        }
        let res = '';
        while (num.length) {
            res += parseInt(num.splice(0,4).join(''),2).toString(16);
        }
        return res;
    }
};