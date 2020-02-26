/*
 * @lc app=leetcode.cn id=88 lang=java
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (n == 0) {
            return;
        }
        if (m == 0) {
            System.arraycopy(nums2, 0, nums1, 0, n);
            return;
        }
        int p1 = m -1;
        int p2 = n -1;
        // 数组 m,n 发在一起后，最后一个元素的索引
        int p = m + n-1;
        while (p1 >=0 && p2 >=0) {
            nums1[p--] = (nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--];
        };
    
        /**
         * 把 nums2中剩余的元素放到 nums1 中，
         * 分三种情况： 1： p2 >= 0, p1 < 0 处理
         * 2：  p2 < 0, p1 < 0 全部处理完
         * 3： p2 <0 0, p1 >= 0 不用处理
         * 也就是只需要处理 p2 >= 0的情况
         */
        if (p2 >= 0) {
            System.arraycopy(nums2, 0, nums1, 0, p2+1);
        };
    }
}
// @lc code=end

