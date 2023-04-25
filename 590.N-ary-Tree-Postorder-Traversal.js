// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    (function pTrav(node) {
        if (!node) return;
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) pTrav(node.children[i]);
        }
        res.push(node.val);
    })(root);

    return res;
};