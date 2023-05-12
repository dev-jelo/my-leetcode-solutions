// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0)
    let cur = max
    for (let i = k; i < nums.length; i++) {
      cur -= nums[i - k]
      cur += nums[i]
      if (cur > max) max = cur
    }
    return max / k
  };