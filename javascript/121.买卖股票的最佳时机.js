/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 使用滑动窗口解答
var maxProfit = function(prices) {
    var start = 0, end = 0, profit = 0, tempProfit;
    for (end; end < prices.length; end++) {
        if (prices[start] >=  prices[end]) {
            start = end;
        };
        tempProfit = prices[end] - prices[start];
        profit = profit > tempProfit ? profit: tempProfit;
    };
    return profit;
};
// @lc code=end

