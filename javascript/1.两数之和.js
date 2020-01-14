/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 使用暴力双层循环 O(n2)
var twoSum = function(nums, target) {
    if (!nums || nums.length < 2) {
        return []
    };
    var first, second;
    var map = {};
    for (var i = 0; i< nums.length -1;i ++) {
        first = nums[i];
        for (var j = i + 1; j < nums.length; j ++) {
            second = nums[j];
            if ((target - first) == second) {
                return [i, j];
            };
        };
    };
    return [];
};
// 使用 map 缓存结果 O(n)
var twoSum2 = function(nums, target) {
    if (!nums || nums.length < 2) {
        return []
    };
    var first, second;
    var map = {};
    for (var i = 0; i< nums.length; i ++) {
        first = nums[i];
        second = target - first;
        if (map[second] != undefined) {
            return [map[second], i];
        } else {
            map[first] = i;
        };
    };
    return [];
};
// @lc code=end

