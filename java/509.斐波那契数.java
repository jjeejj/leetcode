/*
 * @lc app=leetcode.cn id=509 lang=java
 *
 * [509] 斐波那契数
 */

// @lc code=start
class Solution {
    Map<Integer, Integer>  result = new HashMap<>();
    public int fib(int N) {
        if (N == 0) {
            return 0;
        };
        if (N == 1) {
            return 1;
        };
        int resultN;
        if (result.get(N) != null) {
            resultN = result.get(N);
        } else {
            resultN = fib(N-1) + fib(N-2);
            result.put(N, resultN);
        };
        return resultN;
    }
}

// 第二种方法, 该方法的复杂度和空间复杂度相比于第一种小 O(n) / O(1)
class Solution2 {

    public int fib(int N) {
        if (N < 1) {
            return N;
        };
        int first = 0;
        int second = 1;
        int resultN;
        while (N-- > 1) {
            second += first;
            first = second - first;
        };
        return second;
    }
}
// @lc code=end

