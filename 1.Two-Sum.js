// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numOne = 0;
    let numTwo = 0;
    let times = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        numOne = nums[i];
        for (let j = times; j < nums.length; j++) {
            if (j === nums.length - 1 && nums.length > 2) times++;
            numTwo = nums[j];
            if (numOne + numTwo === target) {
                result.push(i, j);
                return result;
            }
        }
    }
};