/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 字符串的不可变性
var reverseStr = function (s, k) {
  var sArr = s.split('');
  // 每次处理 2k 个数据
  for (var start = 0; start < sArr.length; start += 2 * k) {
    // 找到这 2k 个数据范围的第一个和最后一个要交换的数字
    var i = start, j = Math.min(sArr.length - 1, start + k - 1);
    while (i < j) {
      const temp = sArr[i];
      sArr[i++] = sArr[j];
      sArr[j--] = temp;
    };
  };
  return sArr.join();
};
// @lc code=end

