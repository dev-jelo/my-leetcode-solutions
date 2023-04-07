// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

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
var sumOfLeftLeaves = function(root) {
    let res = 0;
    let stack = [[root, false]];
    while (stack.length) {
        let c = stack.pop();
        let cNode = c[0];
        if (!cNode.left && !cNode.right) {
            if (c[1]) {
                res += cNode.val;
            } else {
                continue;
            }
        }
        if (cNode.left) stack.push([cNode.left, true]);
        if (cNode.right) stack.push([cNode.right, false]);
    }
    return res;
};