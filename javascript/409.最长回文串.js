/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var sm = new Map();
    // 计算字符串中字符出现的次数
    for(var c of s) {
        sm.set(c, sm.has(c) ? (sm.get(c) + 1) : 1);
    };
    // 只要出现是偶数个，都可以构造成回文， 若最后的长度小于原字符串长度还可以放到中间一个字符，所有长度在加1
    var res = 0;
    for (var val of sm.values()) {
        res += (val - val %2);
    };
    if (res < s.length) {
        res += 1;
    };
    return res;
};
// @lc code=end

