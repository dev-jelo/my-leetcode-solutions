// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let stack = [{node: root, sum: 0}];
    while (stack.length) {
        const {node, sum} = stack.pop()
        if (!node.left && !node.right) {
            if (sum + node.val == targetSum) return true;
        } else {
            if (node.left) stack.push({node: node.left, sum: sum + node.val})
            if (node.right) stack.push({node: node.right, sum: sum + node.val})
        }
    }
    return false;
};