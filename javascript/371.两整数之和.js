/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var temp = 0;
    while (a & b) { // 有进位的值，双1
        temp = a;
        a = (a & b) << 1;
        b = (temp ^ b);
    };
    return a | b;
};
// @lc code=end

