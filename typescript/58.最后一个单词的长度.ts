/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  let start = i,
    end = i;

  while (i >= 0) {
    if (s[end] == " ") {
      end--;
      start--;
    } else {
      if (s[i] == " ") {
        start = i + 1;
        break;
      }
      start = i;
    }
    i--;
  }
  return end >= 0 ? end - start + 1 : 0;
}
// @lc code=end
