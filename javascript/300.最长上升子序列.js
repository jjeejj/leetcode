/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (43.50%)
 * Likes:    510
 * Dislikes: 0
 * Total Accepted:    64.8K
 * Total Submissions: 147.5K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length;
    if (len < 2) {
        return len;
    };
    // 初始化状态定义的数组
    var dp = [];
    for(var l = 0; l < len; l++) {
        dp.push(1);
    };
    for (var i = 1; i < len; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            };
        };
    };
    var res = 0;
    for (var m = 0; m < len; m++) {
        res = Math.max(res, dp[m]);
    };
    return res;
};
// @lc code=end

