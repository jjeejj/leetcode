import java.util.HashMap;

/*
 * @lc app=leetcode.cn id=167 lang=java
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int low = 0, height = numbers.length -1;
        int[] res = new int[2];
        while (low < height) {
            int result = numbers[low] + numbers[height];
            if (result == target) {
                res[0] = low + 1;
                res[1] = height +1;
                return res;
            }
            if (result > target) {
                ++height;
            }
            if (result < target) {
                ++low;
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
// @lc code=end

