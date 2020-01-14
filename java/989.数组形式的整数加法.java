/*
 * @lc app=leetcode.cn id=989 lang=java
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
class Solution {
    public List<Integer> addToArrayForm(int[] A, int K) {
        int i = A.length -1;
        List<Integer> res = new ArrayList();
        while (i >= 0 || K > 0 ) {
            if ( i >= 0) {
                K = A[i] + K;
            }
            res.add(K % 10);
            K = K / 10;
            i--;
        }
        Collections.reverse(res);
        return res;
    }
}
// @lc code=end

