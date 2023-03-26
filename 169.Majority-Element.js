// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let len = Math.ceil(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            let temp = ++obj[nums[i]];
            if (temp >= len) return nums[i];
        } else {
            obj[nums[i]] = 1;
        }
    };
    return nums[0];
};