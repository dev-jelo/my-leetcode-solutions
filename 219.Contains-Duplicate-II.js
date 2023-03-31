// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let rArr = nums.slice(1, k + 1);
    let lArr = [];
    let left = -1;
    let right = k;
    for (let i = 0; i < nums.length; i ++) {
        if (lArr.includes(nums[i]) || rArr.includes(nums[i])) return true;
        left++;
        right++;
        lArr.push(nums[left]);
        if (lArr.length > k) lArr.shift();
        if (right < nums.length) rArr.push(nums[right]);
        rArr.shift();
    }
    return false;
};