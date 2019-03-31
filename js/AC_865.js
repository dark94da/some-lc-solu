/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let res = root;

    function findMaxDepth(curNode, curDepth) {
        let maxLeft, maxRight;
        let maxDepth = curDepth;
        if (curNode.left) {
            maxLeft = findMaxDepth(curNode.left, curDepth + 1);
        }
        if (curNode.right) {
            maxRight = findMaxDepth(curNode.right, curDepth + 1);
        }
        if (maxLeft && maxLeft > maxDepth) {
            maxDepth = maxLeft;
        }
        if (maxRight && maxRight > maxDepth) {
            maxDepth = maxRight;
        }
        curNode.maxDepth = maxDepth;
        return maxDepth;
    }

    findMaxDepth(root, 0);

    let depthLeft, depthRight;
    while (res) {
        depthLeft = res.left && res.left.maxDepth || 0;
        depthRight = res.right && res.right.maxDepth || 0;
        if (depthLeft === depthRight) {
            break;
        } else {
            res = depthLeft > depthRight ? res.left : res.right;
        }
    }

    return res;
};