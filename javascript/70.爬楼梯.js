/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 使用动态规划的解法
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    };
    // 动态规划数组
    var dp = [0, 1, 2];
   for (var i = 3; i <= n; i++) {
        dp.push(0);
        dp[i] = dp[i-1] + dp[i-2];
   };
   return dp[n];
};
// 还可以使用 斐波那契数列的解法
// @lc code=end

