// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

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
var getMinimumDifference = function(root) {
    let a = [];
    let stack = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            const cur = stack.pop();
            a.push(cur.val);
            root = cur.right;
        }
    }
    let dif = a[1] - a[0];
    for (let i = 2; i < a.length; i++) {
        dif = Math.min(dif, a[i] - a[i - 1]);
    }
    return dif;
};