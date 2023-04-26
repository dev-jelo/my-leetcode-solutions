// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    let stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        const tempLeft = cur.left;
        cur.left = cur.right;
        cur.right = tempLeft;
        if (cur.left) stack.push(cur.left);
        if (cur.right) stack.push(cur.right);
    }
    return root;
};