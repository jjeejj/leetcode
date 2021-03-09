/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(S: string): string {
  if (S.length == 1) {
    return S;
  }
  let stack = [S[0]];
  for (let i = 1; i < S.length; i++) {
    if (S[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join("");
}
// @lc code=end
