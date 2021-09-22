/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (60.12%)
 * Likes:    593
 * Dislikes: 0
 * Total Accepted:    107.9K
 * Total Submissions: 178.3K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 *
 * 示例 1:
 *
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 *
 * 示例 2:
 *
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 *
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 *
 */

// @lc code=start
function integerBreak(n: number): number {
  let dp: number[] = [0, 0, 1];
  for (let i = 3; i < n; i++) {
    let val: number = 0,
      curMaxVal: number = 0;
    for (let j = 1; j < i; j++) {
      curMaxVal = Math.max(j * (i - j), j * dp[i - j]);
      val = val >= curMaxVal ? val : curMaxVal;
    }
    dp[i] = val;
  }
  return dp[n];
}
// @lc code=end
