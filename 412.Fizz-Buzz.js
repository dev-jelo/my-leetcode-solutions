// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let s = "";
        if (i % 3 == 0) s += "Fizz";
        if (i % 5 == 0) s += "Buzz";
        if (!s) s = `${i}`;
        answer.push(s);
    }

    return answer;
};