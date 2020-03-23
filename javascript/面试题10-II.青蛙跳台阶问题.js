/**  
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：

输入：n = 2
输出：2

示例 2：

输入：n = 7
输出：21

提示：

    0 <= n <= 100
*/
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    // 该题目特殊处理的
    if (n == 0) {
        return 1;
    };
    if (n <= 2) {
        return n;
    };
    var first = 1,second = 2, third;
    for (var i = 3; i<=n; i++) {
        // 需要在运算中就要取模，否则大数不准确
        third = (first + second) % 1000000007 ;
        first = second % 1000000007;
        second = third;
    };
    return second;
};