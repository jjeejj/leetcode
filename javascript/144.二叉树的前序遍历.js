/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 迭代的解法
var preorderTraversal = function (root) {
    var result = [];
    if (root == null) {
        return result;
    };
    var stack = [root]; // 栈
    while (stack.length > 0) {
        var node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        };
        if (node.left) {
            stack.push(node.left);
        };
    };
    return result;
};
// @lc code=end

