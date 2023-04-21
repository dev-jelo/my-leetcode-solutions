// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const root = new TreeNode();
    let stack = [{node: root, left: 0, right: nums.length - 1}];

    while (stack.length) {
      const {node, left, right} = stack.pop();
      const mid = Math.floor((left + right) / 2);
      node.val = nums[mid];

      if (left < mid) {
        node.left = new TreeNode();
        stack.push({node: node.left, left, right: mid - 1});
      }

      if (right > mid) {
        node.right = new TreeNode();
        stack.push({node: node.right, left: mid + 1, right})
      }
    }
    
    return root;
};