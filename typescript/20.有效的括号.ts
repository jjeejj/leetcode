/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (!s || s.length == 0) {
    return true;
  }
  // 奇数个字符肯定是无效的
  if (s.length % 2) {
    return false;
  }
  let rea: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let leftRea: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (rea[curr]) {
      leftRea.push(curr);
    } else {
      if (curr != rea[leftRea.pop()]) {
        return false;
      }
    }
  }
  return leftRea.length ? false : true;
}
// @lc code=end
