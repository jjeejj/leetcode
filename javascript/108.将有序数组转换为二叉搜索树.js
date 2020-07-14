/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

/**
 * 中序 遍历的结果就是一个有序数组
 */
var sortedArrayToBST = function (nums) {
    function helper(nums, left, right) {
        if (left > right) {
            return null;
        };
        // 选择一个中间节点作为 根结点
        var mid = ((right - left) >> 1) + left;
        var node = new TreeNode(nums[mid]);
        node.left = helper(nums, left, mid - 1);
        node.right = helper(nums, mid + 1, right);
        return node;
    };
    return helper(nums, 0, nums.length - 1);
};
// @lc code=end

