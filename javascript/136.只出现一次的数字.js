/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用异或的特性 
// 1: 连个相同的数字 异或之后的结果为 0 
// 2： 任何数和 0 进行异或的结果为 该数
var singleNumber = function (nums) {
    var single = 0;
    for (var i = 0; i < nums.length; i++) {
        single ^= nums[i];
    };
    return single;
};
// @lc code=end

