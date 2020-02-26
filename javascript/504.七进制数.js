/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var flag = 1; // 代表正数或者负数
    var result = ""; // 结果
    if (num < 0) {
        flag = 0;
        num  = -num;
    };
    while (Math.floor(num / 7)) {
        result = num % 7 + result;
        num = Math.floor(num / 7);
    };
    result = num + result;
    return flag ? result : ("-" + result)
};
// @lc code=end

