/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.85%)
 * Likes:    1174
 * Dislikes: 0
 * Total Accepted:    442.4K
 * Total Submissions: 692.4K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }
  let left: number = 0,
    right: number = 1;
  while (right < nums.length) {
    if (nums[left] !== 0) {
      left++;
      right++;
      continue;
    }
    if (nums[right] === 0) {
      right++;
      continue;
    }
    if (nums[left] === 0 && nums[right] !== 0) {
      let temp = nums[right];
      nums[left] = temp;
      nums[right] = 0;
      left++;
      right++;
    }
  }
}
// @lc code=end
