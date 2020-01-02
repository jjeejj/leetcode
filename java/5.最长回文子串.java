/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length()== 0) {
            return "";
        };
        int start = 0;
        int end = 0;
        int len = s.length();
        for(int i = 0; i < len - 1; i++) {
            // 中心是一个元素
            int len1 = expandAroundCenterLen(s, i, i);
            // 中心是两个元素
            int len2 = expandAroundCenterLen(s, i, i+1);
            int maxLen = Math.max(len1, len2);
            if (maxLen > (end - start + 1)) {
                start = i -(maxLen -1) / 2;
                end = i + maxLen / 2;
            };
        };
        return s.substring(start, end +1);
    }

    public int expandAroundCenterLen(String s, int start, int end) {
        int len = s.length();
        while (start >=0 && end < len && s.charAt(start) == s.charAt(end)) {
            start--;
            end++;
        };  
        return end - start - 1;
    };
}
// @lc code=end

