/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (55.33%)
 * Likes:    749
 * Dislikes: 0
 * Total Accepted:    47.8K
 * Total Submissions: 81.3K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // 分别得到 单词的长度
    var m = word1.length, n = word2.length;
    if (m * n == 0) {
        return n + m;
    };
    // 动态规划 初始化 二维数组 dp[i][j] 代表前 i 字符 到 单词 前 j 个字符的步骤
    var dp = [];
    for (var i = 0; i <= m; i++) {
        dp.push([]);
        for (var j = 0; j <= n; j++) {
            if (j == 0) {
                dp[i][j] = i;
            };
            if (i == 0) {
                dp[i][j] = j;
            };
        };
    };
    // 继续动态规划的状态转移
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n ; j++) {
            if (m[i - 1] == n[j - 1]) {
                dp[i][j] = dp[i-1][j-1];
            }else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;
            };
        };
    };
    return dp[m][n];
};
// @lc code=end

