// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 * @return {boolean}
 */

// Recursive

var isSymmetric = function(root) {
    const check = function (leftNode, rightNode) {
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;

        return (
            leftNode.val == rightNode.val &&
            check(leftNode.left, rightNode.right) &&
            check(rightNode.left, leftNode.right)
        );
    };
    return check(root.left, root.right);
};


// Iterative

var isSymmetric = function(root) {
    let stack = [];
    stack.push(root.left);
    stack.push(root.right);

    while (stack.length) {
        let leftNode = stack.shift();
        let rightNode = stack.shift();

        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val != rightNode.val) return false;

        stack.push(leftNode.left, rightNode.right);
        stack.push(rightNode.left, leftNode.right);
    }
    return true;
};