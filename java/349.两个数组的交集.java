import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.HashSet;

/*
 * @lc app=leetcode.cn id=349 lang=java
 *
 * [349] 两个数组的交集
 */

// @lc code=start
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        HashSet<Integer> resSet = new HashSet<>();

        int p = 0, q = 0;
        while (p < nums1.length && q < nums2.length) {
            if (nums1[p] > nums2[q]) {
                q++;
            } else if(nums1[p] < nums2[q]) {
                p++;
            } else {
                resSet.add(nums1[p]);
                p++;
                q++;
            };
        }
        // 把 set转换为数组
        int[] res = new int[resSet.size()];
        int index = 0;
        for (int val : resSet) {
            res[index++] = val;
        }
        return res;
    }
}
// @lc code=end

