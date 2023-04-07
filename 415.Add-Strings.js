// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = [];
    let num1A = num1.split('');
    let num2A = num2.split('');
    if (num1A.length > num2A.length) {
        while(num1A.length != num2A.length) {
            num2A.unshift(0);
        }
    } else {
        while(num1A.length != num2A.length) {
            num1A.unshift(0);
        }
    }

    let c = 0;
    while(num1A.length && num2A.length) {
        const [a, b] = [Number(num1A.pop()), Number(num2A.pop())];
        let sum = a + b + c;
        c = 0;
        if (sum > 9) c = 1;
        res.unshift(sum % 10);
    }
    return c == 1 ? 1 + res.join('') : res.join('');
};