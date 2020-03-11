/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 *
 * https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (52.67%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 63.6K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 
 * 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ...
 * + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输出：[0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 * 
 * 
 * 示例 2：
 * 
 * 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：[3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= A.length <= 50000
 * -10^4 <= A[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
// 直接查找的方法
var canThreePartsEqualSum = function(A) {
    var result = false;
    if (A.length < 3) {
        return result;
    };
    var sum = 0;
    // 首先判断 数组 A 的和是不是 3的倍数
    for(var i = 0; i < A.length; i++) {
        sum += A[i];
    };
    if (sum % 3 != 0) {
        return result;
    };
    // 在遍历一遍，找到分割的位置
    var partSum = 0, part = 0;;
    for (var j = 0; j < A.length; j++) {
        partSum += A[j];
        if (partSum == sum / 3) {
            partSum = 0;
            part++;
        };
    };
    if (part >= 3) {
        result  = true; 
    };
    return result;
};

// 使用双指针的方法,从数组的左右开始遍历
var canThreePartsEqualSum2= function(A) {
    var result = false, sum = 0;
    if (A.length < 3) {
        return result;
    };
    // 首先判断 数组 A 的和是不是 3的倍数
    for(var i = 0; i < A.length; i++) {
        sum += A[i];
    };
    if (sum % 3 != 0) {
        return result;
    };
    // 从左右一起开始遍历
    var left = 0, leftSum = A[left], right = A.length - 1, rightSum = A[right], thirdSum = sum / 3;
    while (left + 1 < right) {
        if (leftSum == thirdSum && rightSum == thirdSum) {
            result = true;
            break;
        };
        if (leftSum != thirdSum) {
            leftSum += A[++left];
        };
        if (rightSum != thirdSum) {
            rightSum += A[--right]
        };
    };
    return result;
};
// @lc code=end

