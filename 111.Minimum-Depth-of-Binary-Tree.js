// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

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
var minDepth = function(root) {
    if (!root) return 0;
    let stack = [root];
    let depth = 0;
    while(stack.length) {
        depth++;
        const length = stack.length;
        for (let i = 0; i < length; i++) {
            if (!stack[i].left && !stack[i].right) return depth;
            if (stack[i].left) stack.push(stack[i].left);
            if (stack[i].right) stack.push(stack[i].right);
        }
        stack.splice(0, length);
    }
};