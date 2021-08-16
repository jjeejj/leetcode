/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var j = 0; // 第一个非 0 元素的索引
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i];
      if (i != j) {
        nums[i] = 0;
      }
      j++;
    }
  }
};

/**
 * 第二中方法 记录数组中的 0的个数
 */
var moveZeroes = function (nums) {
  var zeroCount = 0; // 0 元素的个数
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }
  }
  // 当前保存数据的位置 m = 0;
  let m = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[m] = nums[j];
      m++;
    }
  }
  while (m < nums.length) {
    nums[m] = 0;
    m++;
  }
};
