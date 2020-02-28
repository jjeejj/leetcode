/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// ASCII 转换的方法， 还可以通过进制转换 26进制，但是有一点区别
var convertToTitle = function(n) {
    // 返回值
    var res = "";
    while(n > 26) {
        var mod = n % 26;
        if (mod == 0) { // 最后一位为 Z
            res = res + "Z";
            n = n / 26 - 1;
        } else {
            res = String.fromCharCode(n % 26  + 48 + 16) + res;
            n = Math.floor(n / 26);
        };
    };
    if (n != 0) {
        res = String.fromCharCode(n + 48 + 16) + res; 
    };
    return res;
// @lc code=end

