/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (52.59%)
 * Likes:    52
 * Dislikes: 0
 * Total Accepted:    14.8K
 * Total Submissions: 26.6K
 * Testcase Example:  '"ab-cd"'
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 示例 2：
 * 
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 示例 3：
 * 
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122 
 * S 中不包含 \ or "
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  if (S.length == 0) {
    return S;
  }
  var wordReg = /[a-zA-Z]/;
  var result = [];
  var left = 0, right = S.length - 1;
  while (left <= right) {
    if (wordReg.test(S[left]) && wordReg.test(S[right])) {
      result[left] = S[right];
      result[right] = S[left];
      left++;
      right--;
    } else if (!wordReg.test(left)) {
      result[left] = S[left];
      left++;
    } else {
      result[right] = S[right];
      right--;
    }
  }
  return result.join("");
};
// @lc code=end
