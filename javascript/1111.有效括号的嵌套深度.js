/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
/** *
 * max(depth(A), depth(B)) 的可能取值最小 即深度尽可能平分， 深度即是 左括号
 * 深度为偶数的 分到 A, 深度为奇数的分到 B
 */
var maxDepthAfterSplit = function(seq) {
    var ans = [], dep = 0; // 返回结果数组,
    for(var i = 0; i < seq.length; i++) {
        if (seq[i] == "(") {
            dep++;
            ans[i] = dep % 2;
        } else { // 右边的括号
            ans[i] = dep % 2;
            dep--;
        };
    };
    return ans;
};
// @lc code=end

