/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// DFS
var generateParenthesis = function(n) {
    var res = [];
    if (n == 0) {
        return res;
    };
    // DFS
    dfs("", n, n, res);
    return res;
};
/**
 * 深度优先遍历
 * @param {String} currStr 当前字符串
 * @param {Number} left 当前剩余得z左括号
 * @param {Number} right 当前剩余得右括号
 * @return res 返回的结果
  */
function dfs(currStr, left, right, res) {
    if (left == 0 && right == 0) {// 一次遍历结束
        res.push(currStr);
        return;
    };
    if (left > right) {
        return;
    };
    if (left > 0) {
        dfs(currStr + "(", left -1, right, res);
    };
    if (right > 0) {
        dfs(currStr + ")", left , right - 1, res);
    };
}
// @lc code=end

