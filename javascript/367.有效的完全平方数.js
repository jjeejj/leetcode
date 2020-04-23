/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 使用二分法
var isPerfectSquare = function(num) {
    if (num == 1) {
        return true;
    };
    var start = 1, end = start + ((num + 1 - start) >> 1);
    while (start <= end) {
        var mid = ((end - start) >> 1) + start;
        var midSqrt = mid * mid;
        if (midSqrt == num) {
            return true;
        } else if(midSqrt > num){
            end = mid - 1;
        } else {
            start = mid + 1;
        };
    };
    return false;
};
// @lc code=end

