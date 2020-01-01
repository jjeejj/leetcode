/*
 * @lc app=leetcode.cn id=9 lang=java
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.77%)
 * Likes:    862
 * Dislikes: 0
 * Total Accepted:    222.1K
 * Total Submissions: 391K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
class Solution {

    // 第一种解法，转换为字符串
    public boolean isPalindrome(int x) {
        // 负数不是回文数 或者最后一位是 0的 也排除
        if (x < 0  || (x != 0 && x % 10 == 0)) {
            return false;
        };
        // 整数转化为字符串解决，这个会增加空间复杂
        String xs = String.valueOf(x);
        int length = xs.length();
        for(int i = 0; i < length / 2; i++) {
            if (xs.charAt(i) != xs.charAt(length - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // 第二种解法，反转一半的数字
    public boolean isPalindrome2(int x) {
        // 负数不是回文数 或者最后一位是 0的 也排除
        if (x < 0  || (x != 0 && x % 10 == 0)) {
            return false;
        };
        // 反转之后的数字
        int revertInt = 0;
        while(revertInt < x) {
            revertInt = revertInt * 10 + x % 10;
            x = x / 10;
        }
        // 比较大小
        return x == revertInt || x == revertInt / 10;
    }
}
// @lc code=end

