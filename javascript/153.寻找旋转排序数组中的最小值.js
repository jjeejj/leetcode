/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length == 0) {
        return;
    };
    // 如果最后一个元素大于第一个元素，说明是有序的直接返回第一个既可以
    if (nums[nums.length - 1] > nums[0]) {
        return nums[0]
    };
    var left = 0, right = nums.length - 1;
    while (left < right) {
        var mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        };
    };
    return nums[left];
};
// @lc code=end

