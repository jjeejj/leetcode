/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) {
        return 0;
    };
    if (nums.length == 1) {
        return nums[0];
    };
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    };
    var dp = []; // 代表前 n 个房间能获取的最大金额
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    };
    return dp[i - 1];
};
// @lc code=end

