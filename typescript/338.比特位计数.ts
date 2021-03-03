/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(num: number): number[] {
  if (num == 0) {
    return [0];
  }
  let res: number[] = [0, 1];
  for (let i = 2; i <= num; i++) {
    res[i] = i % 2 ? res[i - 1] + 1 : res[i / 2];
  }
  return res;
}
// @lc code=end
