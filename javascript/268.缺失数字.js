/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用数学的方法。 求和
var missingNumber = function (nums) {
    var sum = (1 + nums.length) * nums.length / 2;
    nums.forEach(val => {
        sum -= val;
    });
    return sum;
};

// 使用异或运算
var missingNumber = function (nums) {
    var missNum = 0;
    for (var i = 0; i <= nums.length; i++) {
        missNum ^= (i ^ nums[i])
    };
    return missNum;
};
// @lc code=end

