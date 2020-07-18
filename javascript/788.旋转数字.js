/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 *
 * https://leetcode-cn.com/problems/rotated-digits/description/
 *
 * algorithms
 * Easy (58.30%)
 * Likes:    73
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 19.4K
 * Testcase Example:  '10'
 *
 * 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。
 * 
 * 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5
 * 可以互相旋转成对方（在这种情况下，它们以不同的方向旋转，换句话说，2 和 5 互为镜像）；6 和 9
 * 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。
 * 
 * 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 
 * 在[1, 10]中有四个好数： 2, 5, 6, 9。
 * 注意 1 和 10 不是好数, 因为他们在旋转之后不变。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * N 的取值范围是 [1, 10000]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 暴力破解
var rotatedDigits = function (N) {
  // 包含0 1 8 2 5 6 9 的数字 但是又不能全是 0 1 8
  var count = 0, regex1 = /^[0182569]*$/, regex2 = /^[018]*$/;
  for (var i = 0; i <= N; i++) {
    if (regex1.test(i) && !regex2.test(i)) {
      count++;
    }
  }
};
// 利用动态规划
var rotatedDigits = function (N) {
  var count = 0, d = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1];
  for (var i = 0; i <= N; i++) {
    if (d[Math.trunc(i / 10)] == -1 || d[i % 10] == -1) {
      d[i] = -1;
    } else {
      d[i] = d[Math.trunc(i / 10)] | d[i % 10];
      d[i] == 1 ? count++ : "";
    }
  }
  return count;
};
// @lc code=end
