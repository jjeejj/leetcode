/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    for(var i = A.length -1; i >= 0; i--) {
        var temp_K = A[i] + K;
        var K_right = temp_K % 10;  // 取得相加最后一位的数字
        A[i] = K_right;
        K = Math.floor(temp_K / 10);
    };

    
    while(K > 0) {
        A.unshift(K % 10);
        K = Math.floor(K / 10);
    };

    return A;
};
// @lc code=end

