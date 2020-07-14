/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
// 迭代的写法
var searchBST = function (root, val) {
    while (root) {
        if (root.val == val) {
            return root;
        };
        if (root.val > val) {
            root = root.left
        } else {
            root = root.right
        };
    };
    return null;
};

// 递归的写法
var searchBST1 = function (root, val) {
    if (!root || root.val == val) {
        return root;
    };
    return root.val > val ? searchBST1(root.left, val) : searchBST1(root.right, val);
};
// @lc code=end

