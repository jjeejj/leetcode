/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用二分查找
var findPeakElement = function(nums) {
    if (nums.length ==0) {
        return -1;
    };
    var l = 0, r = nums.length -1;
    while (l < r) {
        var mid = l + ((r - l) >> 1);
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            return mid;
        } else if (nums[mid] > nums[mid+1]){ // 这里不可能相等
            r = mid;
        } else {
            l = mid + 1;
        };
    };
    return l;
};
// @lc code=end

