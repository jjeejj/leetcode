/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 72ms 的解法
var isValid = function(s) {
    if (s == null || s.length == 0) {
        return true;
    };
    var result = true;
    var map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    var left = ["(", "{", "["];
    var value = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (left.includes(c)) {
            value.push(c);
        } else {
            if (map[value.pop()] !== c) {
                result = false;
                break;
            }; 
        };
    };
    if (value.length != 0) {
        result = false;
    };
    return result;
};
// @lc code=end

// 更快的解法,时间复杂度和空间复杂度相比上面的都在减小
var isValid = function(s) {
    if (s == null || s.length == 0) {
        return true;
    };
    var right = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c == "(") {
            right.push(")");
        } else if (c == "[") {
            right.push("]");
        } else if (c == "{") {
            right.push("}");
        } else {
            if (right.pop() != c) {
                return false;
            }
        };
    };
    return !right.length;
};
