// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let res = [];
    let stack = [root];

    while (stack.length) {
        const len = stack.length;
        let total = 0;
        for (let i = 0; i < len; i++) {
            total += stack[i].val;
            if (stack[i].left) stack.push(stack[i].left);
            if (stack[i].right) stack.push(stack[i].right);
        }
        res.push((total / len).toFixed(5));
        stack.splice(0, len);
    }

    return res;
};