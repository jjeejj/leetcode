/*
 * @lc app=leetcode.cn id=976 lang=java
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
class Solution {
    public int largestPerimeter(int[] A) {
        if (A.length < 3) {
            return 0;
        };
        Arrays.sort(A); // 从小到大排序
        // 遍历, 两边之和大于第三边
        for(int i = A.length-1; i >= 2; i--) {
            if (A[i-1] + A[i-2] > A[i]) {
                return A[i-1] + A[i-2] + A[i];
            };
        };
        return 0;
    }
}
// @lc code=end

