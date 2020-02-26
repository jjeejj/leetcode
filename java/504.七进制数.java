/*
 * @lc app=leetcode.cn id=504 lang=java
 *
 * [504] 七进制数
 */

// @lc code=start
class Solution {
    public String convertToBase7(int num) {
        StringBuilder result = new StringBuilder(); // 结果
        String flag = "";
        if (num < 0) {
            flag = "-";
            num  = -num;
        };
        do {
            result.append(num % 7);
            num = num / 7;
        } while (num > 0);
        return flag + result.reverse().toString();
    }
}
// @lc code=end

