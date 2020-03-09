/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (36.61%)
 * Likes:    467
 * Dislikes: 0
 * Total Accepted:    58.6K
 * Total Submissions: 152.6K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 目标金额
    if (amount == 0) {
        return 0;
    };
    if (amount < 0) {
        return -1;
    };
    // 初始化，指定金额需要金币数量的数组，初始都大于最大值数量，方便取得最小值
    var dp = [0];
    for (var i = 1; i<= amount; i++) {
        dp[i] = amount+1;
    };

    for (var m = 0; m < dp.length; m++) {
        for (var n = 0; n < coins.length; n++) {
            if (m < coins[n]) {
                continue;
            };
            dp[m] = Math.min(dp[m], 1+dp[m - coins[n]]);
        };
    };
    return dp[amount]==amount+1 ? -1 : dp[amount];
};
// @lc code=end
