/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (70.05%)
 * Likes:    463
 * Dislikes: 0
 * Total Accepted:    159.5K
 * Total Submissions: 226.7K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  let res = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    let rows = new Array(i).fill(1);
    for (let j = 1; j < i - 1; j++) {
      rows[j] = res[i - 2][j - 1] + res[i - 2][j];
    }
    res.push(rows);
  }
  return res;
}
// @lc code=end
