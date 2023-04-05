// Given the root of a binary tree, return all root-to-leaf paths in any order.
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    let stack = [];
    if (root.left || root.right) {
        if (root.left) stack.push([root.left, `${root.val}->${root.left.val}`]);
        if (root.right) stack.push([root.right, `${root.val}->${root.right.val}`]);
    } else {
        return [`${root.val}`];
    }
    while (stack.length) {
        let current = stack.pop();
        let currentNode = current[0];
        if (!currentNode.left && !currentNode.right) {
            res.push(current[1]);
            continue;
        } 
        if (currentNode.left) {
            stack.push([currentNode.left, `${current[1]}->${currentNode.left.val}`]);
        }
        if (currentNode.right) {
            stack.push([currentNode.right, `${current[1]}->${currentNode.right.val}`]);
        }
    }
    return res;
};