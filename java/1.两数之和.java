import java.util.Map;

/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 */

// @lc code=start
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int first, second;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i< nums.length; i ++) {
            first = nums[i];
            second = target - first;
            if (map.get(second) != null) {
                return new int[]{map.get(second), i};
            } else {
                map.put(first, i);
            };
        };
        throw new IllegalArgumentException("No two sum solution");
    }
}
// @lc code=end

