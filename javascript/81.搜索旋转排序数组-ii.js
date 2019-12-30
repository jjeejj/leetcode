/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var low = 0;
    var height = nums.length -1;
    var mid = 0;
    while (low <= height) {
        mid = low + (height - low) >> 1;
        if (nums[mid] == target) {
            return true;
        };
        if (nums[mid] == nums[low]) {
            low++;
            continue;
        };
        if (nums[mid] == nums[height]) {
            height--;
            continue;
        };
        if (nums[low] <= nums[mid]) { // 左边是有序的
            if (target < nums[mid] && target >= nums[low]) { // 在左边
                height = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[height]) {
                low = mid + 1;
            } else {
                height = mid - 1;
            };
        };
    };
    return false;
};
// @lc code=end

