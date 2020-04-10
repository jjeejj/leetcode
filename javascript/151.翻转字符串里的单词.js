/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 去掉字符串前后的空格
    s = s.trim(), startIndex = 0, endIndex = 0, currW = "", res = [];
    // 遍历把 前面的单词放到后面
    while (endIndex < s.length) {
        if (s[endIndex] == " ") { // 新的单词
            res.unshift(s.slice(startIndex, endIndex));
            while (s[endIndex] == " ") {
                endIndex++;
            };
            startIndex = endIndex;
        };
        endIndex++;
    };
    res.unshift(s.slice(startIndex, endIndex+1));
    return res.join(" ");
};
// @lc code=end

