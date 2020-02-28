/*
 * @lc app=leetcode.cn id=168 lang=java
 *
 * [168] Excel表列名称
 */

// @lc code=start
// 使用进制转换的方法
class Solution {
    public String convertToTitle(int n) {
        String c[] = {"", "A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L","M" ,"N", "O", "P", "Q","R", "S", "T","U","V", "W","X", "Y","Z"};
        String res = "";
        while (n > 26) {
            if (n % 26 == 0) {
               res = "Z" + res;
               n =  n / 26 - 1;
            } else {
                res = c[n % 26 ]  + res;
                n = n / 26; 
            }
        }
        res = c[n] + res;
        return res;
    }
}
// @lc code=end

