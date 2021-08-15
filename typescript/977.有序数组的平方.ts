/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (72.51%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    138.8K
 * Total Submissions: 192.8K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 10^4
 * -10^4
 * nums 已按 非递减顺序 排序
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 *
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let left: number = 0,
    right: number = 0;
  // 找到数组的正负数的分界线，确定左右指针
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      left = i - 1;
      right = i;
      break;
    } else {
      left = i;
      right = i + 1;
    }
  }
  // 保存需要返回的技术
  let res: number[] = [];

  while (left >= 0 || right < nums.length) {
    // 处理剩余的元素
    if (left < 0) {
      res.push(nums[right] * nums[right]);
      right++;
    } else if (right >= nums.length) {
      res.push(nums[left] * nums[left]);
      left--;
    } else if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      res.push(nums[left] * nums[left]);
      left--;
    } else {
      res.push(nums[right] * nums[right]);
      right++;
    }
  }
  return res;
}
// @lc code=end
