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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0
    let traverse = node => {
        if (node.left) traverse(node.left)
        if (L <= node.val && node.val <= R) {
            sum += node.val
        }
        if (node.right) traverse(node.right)
    }
    traverse(root)
    return sum
};

// inorder traversal