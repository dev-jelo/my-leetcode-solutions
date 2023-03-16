// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Recursive solution (doesn't work on leetcode site because it is too slow)
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const steps = [1, 2];
  let result = 0;

  (function r(num) {
      for (let i = 0; i < 2; i++) {
          let temp = num + steps[i];
          if (temp == n) {
              result++;
          } else if (temp > n) {
              break;
          } else {
              r(temp);
          }
      }
  })(0);

  return result;
}

// Iterative (fibonacci sequence)
// The number of distinct ways to get to n steps when climbing either 1 or 2 steps at a time is related to the Fibonacci sequence because the number of ways to get to the nth step is equal to the sum of the number of ways to get to the (n-1)th step and the number of ways to get to the (n-2)th step. This is because in order to get to the nth step, you can either take a single step from the (n-1)th step, or take two steps from the (n-2)th step.
// This recursive relationship between the number of ways to reach a particular step and the number of ways to reach the two previous steps is exactly the same relationship that defines the Fibonacci sequence. Specifically, the nth Fibonacci number is equal to the sum of the (n-1)th and (n-2)th Fibonacci numbers.
// Thus, the number of distinct ways to get to n steps when climbing either 1 or 2 steps at a time is related to the Fibonacci sequence, and the nth number in this sequence gives the number of distinct ways to get to the nth step. For example, the first few Fibonacci numbers are:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// This means that there is 1 distinct way to get to the 1st step, 2 distinct ways to get to the 2nd step, 3 distinct ways to get to the 3rd step, 5 distinct ways to get to the 4th step, 8 distinct ways to get to the 5th step, and so on.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 0;
    let second = 1;
    let third;
    for (let i = 0; i < n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
}