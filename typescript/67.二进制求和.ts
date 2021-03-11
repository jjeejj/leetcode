/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  // if (a.length > b.length) {
  //   b.padStart(a.length, "0");
  // }
  // if (a.length < b.length) {
  //   a.padStart(b.length, "0");
  // }
  let isPlus = 0,
    res = [],
    n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    isPlus += parseInt(i < a.length ? a[a.length - i - 1] : "0");
    isPlus += parseInt(i < b.length ? b[b.length - i - 1] : "0");
    res.push(isPlus % 2);
    isPlus = isPlus >> 1;
  }
  isPlus ? res.push(1) : "";
  return res.reverse().join("");
}
// @lc code=end
