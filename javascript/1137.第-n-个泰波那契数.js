/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 1) {
        return n;
    };
    if (n == 2) {
        return 1;
    };
    var first = 0;
    var second = 1;
    var third = 1;
    while (n-- > 2) {
       third += second + first;
       second = third - second - first; 
       first = third - second - first;
    }
    return third;
};
// @lc code=end

