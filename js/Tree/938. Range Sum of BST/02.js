var rangeSumBST = function(root, L, R) {
    let sum = 0
    let stack = [root]
    while (stack.length) {
        let node = stack.shift
        if (L <= node.val && node.val <= R) {
            sum += node.val
        }
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return sum
};