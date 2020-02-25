/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// 从顶部一直遍历到底部
var isBalanced = function(root) {
    if (!root) {
        return true;
    };
    return Math.abs(deep(root.left) - deep(root.right)) <=1 && isBalanced(root.left)  && isBalanced(root.right);

};

// 从底部遍历到顶部，进行比较
var isBalanced2 = function(root) {
    if (!root) {
        return true;
    };
    // 递归计算每个节点的高度进行计算
    if (!isBalanced2(root.left)) {
        return false;
    };
    if (!isBalanced2(root.right)) {
        return false;
    };
    // 比较左右节点的高度差
    if (Math.abs(deep(root.left) - deep(root.right)) > 1) {
        return false;
    };
    return true;
};

// 计算一个节点的深度
var deep = function(node) {
    if (!node) {
        return 0;
    };
    return 1 + Math.max(deep(node.left), deep(node.right))
}
// @lc code=end

