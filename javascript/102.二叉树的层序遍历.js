/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var queue = [], res = [];
    if (root == null) {
        return res;
    };
    queue.push(root);
    while (queue.length > 0) {
        // 当前层的元素个数
        var currSize = queue.length;
        res.push([]);
        for (var i = 0; i < currSize; i++) {
            var currNode = queue.shift();
            res[res.length - 1].push(currNode.val);
            if (currNode.left) {
                queue.push(currNode.left);
            };
            if (currNode.right) {
                queue.push(currNode.right);
            };
        };
    };
    return res;
};
// @lc code=end

