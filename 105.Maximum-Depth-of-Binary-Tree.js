// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 * @return {number}
 */


// Recursive

var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// Iterative

var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let stack = [root];
    while(stack.length) {
        depth++;
        let length = stack.length;
        for (let i = 0; i < length; i++) {
            if (stack[i].left) stack.push(stack[i].left);
            if (stack[i].right) stack.push(stack[i].right);
        }
        stack.splice(0, length);
    }
    return depth;
};