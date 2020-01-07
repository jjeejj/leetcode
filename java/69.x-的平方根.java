/*
 * @lc app=leetcode.cn id=69 lang=java
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.28%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    82.7K
 * Total Submissions: 221.5K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
class Solution {
    public int mySqrt(int x) {
        if (x == 0 || x == 1) {
            return x;
        };
        int left = 1;
        int right = x;
        int mid;
        int res = 0;
        int div;
        while (left <= right) {
            mid = (right - left) / 2 + left;
            div = x/mid; // 这里用除，用乘法可能会越界
            if (mid == div ) {
                return mid;
            };
            if (mid > div) {
                right = mid -1;
            };
            if (mid < div) {
                res = mid;
                left = mid + 1;
            };
        };
        return res;
    }
}
// @lc code=end

