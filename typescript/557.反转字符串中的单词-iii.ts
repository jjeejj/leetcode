/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (74.30%)
 * Likes:    313
 * Dislikes: 0
 * Total Accepted:    144.3K
 * Total Submissions: 193.9K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 *
 *
 * 示例：
 *
 * 输入："Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 *
 *
 */

// @lc code=start
function reverseWords(s: string): string {
  let i: number = 0,
    ret: string[] = [];
  while (i < s.length) {
    let start: number = i;
    while (i < s.length && s[i] !== " ") {
      i++;
    }
    let right: number = i - 1,
      left = start;
    for (let m = right; m >= left; m--) {
      ret.push(s[m]);
    }
    while (i < s.length && s[i] === " ") {
      ret.push(" ");
      i++;
    }
  }
  return ret.join("");
}
// @lc code=end
