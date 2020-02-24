/*
 * @lc app=leetcode.cn id=704 lang=java
 *
 * [704] 二分查找
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) {
            return -1;
        }
        int start = 0, end = nums.length, mid = -1;
        while (start <= end) {
            mid = start + (end-start)/2;
            if (nums[mid] == target) {
                return mid;
            };
            if (nums[mid] > target) {
                end = mid - 1; 
            } else {
                start = mid + 1;
            }
        }

        return -1;
    }
}
// @lc code=end

