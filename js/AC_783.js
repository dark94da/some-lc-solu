/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let res = Number.MAX_VALUE;

    function findMax(curNode) {
        if (!curNode) {
            return undefined;
        }
        if (curNode.max !== undefined) {
            return curNode.max;
        }
        if (curNode.right) {
            curNode.max = findMax(curNode.right);
        } else {
            curNode.max = curNode.val;
        }
        return curNode.max;
    }

    function findMin(curNode) {
        if (!curNode) {
            return undefined;
        }
        if (curNode.min !== undefined) {
            return curNode.min;
        }
        if (curNode.left) {
            curNode.min = findMin(curNode.left);
        } else {
            curNode.min = curNode.val;
        }
        return curNode.min;
    }

    function travel(curNode) {
        let max = findMax(curNode.left);
        let min = findMin(curNode.right);
        if (min !== undefined && (min - curNode.val) < res) {
            res = min - curNode.val;
        }
        if (max !== undefined && (curNode.val - max) < res) {
            res = curNode.val - max;
        }
        if (curNode.left) {
            travel(curNode.left);
        }
        if (curNode.right) {
            travel(curNode.right);
        }
    }

    travel(root);
    return res;
};

