/*
 * @lc app=leetcode.cn id=1137 lang=java
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
class Solution {
    public int tribonacci(int n) {
        if (n <= 1) {
            return n;
        };
        if (n == 2) {
            return 1;
        };
        int first = 0;
        int second = 1;
        int third = 1;
        while (n-- > 2) {
           third += second + first;
           second = third - second - first; 
           first = third - second - first;
        }
        return third;
    }
}
// @lc code=end

