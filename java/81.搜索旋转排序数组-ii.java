/*
 * @lc app=leetcode.cn id=81 lang=java
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
class Solution {
    public boolean search(int[] nums, int target) {
        int low = 0;
        int height = nums.length -1;
        int mid = 0;
        while (low <= height) {
            mid = low + (height - low) / 2;
            if (nums[mid] == target) {
                return true;
            };
            if (nums[mid] == nums[low]) {
                ++low;
                continue;
            };
            if (nums[mid] == nums[height]) {
                --height;
                continue;
            };
            if (nums[low] <= nums[mid]) { // 左边是有序的
                if (target < nums[mid] && target >= nums[low]) { // 在左边
                    height = mid - 1;
                } else {
                    low = mid + 1;
                };
            } else {
                if (target > nums[mid] && target <= nums[height]) {
                    low = mid + 1;
                } else {
                    height = mid - 1;
                };
            };
        };
        return false;
    }
}
// @lc code=end

