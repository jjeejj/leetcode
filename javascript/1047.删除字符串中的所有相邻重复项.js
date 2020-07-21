/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    var stack = [S[0]];
    for (var i = 1; i < S.length; i++) {
        var curr = S[i];
        if (curr == stack[stack.length - 1]) { // 重复了
            stack.pop();
        } else {
            stack.push(curr)
        };
    };
    return stack.join('');
};
// @lc code=end

