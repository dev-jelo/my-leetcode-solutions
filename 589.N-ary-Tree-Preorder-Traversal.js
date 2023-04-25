// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let res = [];
    let stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        res.push(cur.val);
        for (let i = cur.children.length - 1; i >= 0; i--) {
            if (cur.children[i]) stack.push(cur.children[i]);
        }
    }
    return res;
};