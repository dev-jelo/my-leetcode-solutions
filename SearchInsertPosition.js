// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let half = 0;
    let max = nums.length - 1;
    let min = 0;
    
    while (max - min > 1) {
        half = Math.ceil((max + min) / 2);

        if (target === nums[half]) {
            return half;
        } else if (target > nums[half]) {
            min = half;
        } else {
            max = half;
        }
    }

    if (target > nums[max]) {
        return max + 1;
    } else if (target < nums[min]){
        return min;
    } else if (target == nums[min]){
        return min;
    } else {
        return max;
    }
};