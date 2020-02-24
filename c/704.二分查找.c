/*
 * @lc app=leetcode.cn id=704 lang=c
 *
 * [704] 二分查找
 */

// @lc code=start


int search(int* nums, int numsSize, int target){
    if (nums == NULL || numsSize == 0) {
        return -1;
    };
    int start = 0, end = numsSize -1, mid = 0;
    while(start <= end) {
        mid = start + (end-start)/2;
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
}


// @lc code=end

