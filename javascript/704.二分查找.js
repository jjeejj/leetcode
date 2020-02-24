/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length == 0) {
        return -1;
    };
    var start = 0, end = nums.length -1, mid = 0;
    while(start <= end) {
        mid = start + Math.ceil((end-start)/2);
        if (nums[mid] == target) {
            return mid;
        };
        if (nums[mid] > target) {
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    };
    return -1;
};
// @lc code=end

