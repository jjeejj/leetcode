/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var low = 0, height = numbers.length -1;
    while (low < height) {
        var result = numbers[low] + numbers[height];
        if (result == target) {
            return [low + 1, height +1];
        }
        if (result > target) {
            --height;
        }
        if (result < target) {
            ++low;
        }
    }
};
// @lc code=end

