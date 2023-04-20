// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let stack = [root];
    let depth = 0;
    while (stack.length) {
        depth++;
        const length = stack.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < stack[i].children.length; j++){
                stack.push(stack[i].children[j]);
            }
        }
        stack.splice(0, length);
    }
    return depth;
};