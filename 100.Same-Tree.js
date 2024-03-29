// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let stackP = [];
    let stackQ = [];
    while(stackP.length || p) {
        if (p) {
            if (!q || p.val != q.val) return false;
            if (!p.left && q.left) return false;
            stackP.push(p);
            stackQ.push(q);
            p = p.left;
            q = q.left;
        } else {
            p = stackP.pop().right;
            q = stackQ.pop().right;
        };
    };
    if (!p && q) return false;
    return true;
};