/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let i = digits.length - 1,
    isPlus = 1;
  while (i >= 0) {
    let result = digits[i] + isPlus;
    if (result >= 10) {
      digits[i] = 0;
    } else {
      digits[i] = result;
      isPlus = 0;
      break;
    }
    i--;
  }
  isPlus ? digits.unshift(1) : "";
  return digits;
}
// @lc code=end
