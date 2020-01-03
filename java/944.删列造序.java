/*
 * @lc app=leetcode.cn id=944 lang=java
 *
 * [944] 删列造序
 */

// @lc code=start
class Solution {
    public int minDeletionSize(String[] A) {
        int length = A.length; // 数组的总长度
        if (A.length == 0) {
            return 0;
        };
        int len = A[0].length(); // 数组中每个字符串的长度
        int result = 0;
        // 该方法的时间复杂度为 O(m). 是由于里面只考虑了数组的长度即为 N
        for(int i = 0; i < len; i++) {
            for (int j; j < length - 1; j++) {
                if (A[j].charAt(i) > A[j+1].charAt(i)) {
                    result++;
                    break;
                };
            }
        }
        return result;
    }
}
// @lc code=end

