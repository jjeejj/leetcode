/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.37%)
 * Likes:    1762
 * Dislikes: 0
 * Total Accepted:    497.9K
 * Total Submissions: 950.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let prePreRes = 1,
    preRes = 2,
    curRes = 0;
  for (let i = 3; i <= n; i++) {
    curRes = prePreRes + preRes;
    prePreRes = preRes;
    preRes = curRes;
  }
  return curRes;
}
// @lc code=end
