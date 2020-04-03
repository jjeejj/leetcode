/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var result = 0, str = str.trim(); // 返回的结果字符串
    // 字符串首尾判断
    if (/[a-zA-Z]/.test(str[0])) {
        return result;
    } else {
        result = str[0];
    };
    for (var i = 1; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            result += str[i];
        } else {
            break;
        };
    };
    // 只有一个符号的时候，直接返回 0
    if (result.length == 1 && /[+-]/.test(result)) {
        return 0;
    };
    // 判断是否超过数值范围
    result = Number(result)
    if (result < ((-2) ** 31)) {
        result = (-2) ** 31;
    };
    if (result > (2 ** 31) -1) {
        result = (2 ** 31) -1;
    };
    return result;
};

// 使用 JS 原生的 parseInt 函数进行处理
var myAtoi = function(str) {
    var num = parseInt(str, 10);
    if (isNaN(num)) {
        return 0;
    };
    if (num < ((-2) ** 31)) {
        return (-2) ** 31;
    };
    if (num > (2 ** 31) -1) {
        return  (2 ** 31) -1;
    };
    return num;
};

// 使用自动机状态机进行处理
var myAtoi = function(str) {
    
};
// @lc code=end

