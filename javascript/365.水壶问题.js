/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 *
 * https://leetcode-cn.com/problems/water-and-jug-problem/description/
 *
 * algorithms
 * Medium (29.00%)
 * Likes:    134
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 37.7K
 * Testcase Example:  '3\n5\n4'
 *
 * 有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？
 * 
 * 如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。
 * 
 * 你允许：
 * 
 * 
 * 装满任意一个水壶
 * 清空任意一个水壶
 * 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 * 
 * 
 * 示例 1: (From the famous "Die Hard" example)
 * 
 * 输入: x = 3, y = 5, z = 4
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 输入: x = 2, y = 6, z = 5
 * 输出: False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (z == 0) {
        return true;
    };
    if (x == 0) {
        return y == z;
    };
    if (y == 0) {
        return x == z;
    };
    if (z > (x + y)) {
        return false;
    };
    // 求 x 和 y 的最大公约数
    return (z % gcd(x,y) == 0);
};

// 求最大公约数
function gcd(a, b) {
    if (b == 0) {
        return a;
    };
    return gcd(b, a % b);
};
// @lc code=end

