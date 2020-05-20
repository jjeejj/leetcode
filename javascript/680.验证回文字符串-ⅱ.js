/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (34.14%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    36.4K
 * Total Submissions: 93.4K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var left = 0, right = s.length - 1;
    while (left <= right){
        var flag1 = true, flag2 = true;
        if (s[left] != s[right]) {
            // 删除坐左边的元素
            for (var i = left+1, j = right; i <= j; i++, j--) {
                if (s[i] != s[j]) {
                    flag1 = false;
                    break;
                };
            };
            // 删除右边的元素 
            for (var i = left, j = right - 1; i <= j; i++, j--) {
                if (s[i] != s[j]) {
                    flag2 = false;
                    break;
                };
            };
            return flag1 || flag2;
        } else {
            left++;
            right--;
        };
    };
    return true;
};
// @lc code=end

