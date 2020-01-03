/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    var length = A.length; // 数组的总长度
    if (A.length == 0) {
        return 0;
    };
    var len = A[0].length; // 数组中每个字符串的长度
    var result = 0;
    // 该方法的时间复杂度为 O(m). 是由于里面只考虑了数组的长度即为 N
    for(var i = 0; i < len; i++) {
        for (var j = 0; j < length - 1; j++) {
            if (A[j][i] > A[j+1][i]) {
                result++;
                break;
            };
        }
    }
    return result;
};
// @lc code=end

