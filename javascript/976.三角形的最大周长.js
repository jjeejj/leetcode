/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    if (A.length < 3) {
        return 0;
    };
    A.sort((a,b) => {return b-a}); // 从大到小排序
    // 遍历, 两边之和大于第三边
    for(var i = 0; i <= A.length -3; i++) {
        if (A[i+1] + A[i+2] > A[i]) {
            return A[i+1] + A[i+2] + A[i];
        };
    };
    return 0;
};
// @lc code=end

