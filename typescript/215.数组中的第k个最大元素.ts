/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.64%)
 * Likes:    1440
 * Dislikes: 0
 * Total Accepted:    499.1K
 * Total Submissions: 771.8K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 *
 *
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  // 构建堆
  for (let i = (nums.length - 1) >> 1; i >= 0; i--) {
    downAdjust(nums, i, nums.length);
  }
  // 排序
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    let temp = nums[i];
    nums[i] = nums[0];
    nums[0] = temp;
    downAdjust(nums, 0, i);
  }
  return nums[0];
}

// 堆节点下沉调整
function downAdjust(nums: number[], i: number, length: number) {
  let temp = nums[i];
  // 定位父节点的左节点
  let childIndex = 2 * i + 1;
  while (childIndex < length) {
    // 或者左右子节点中值最小的
    if (childIndex + 1 < length && nums[childIndex] < nums[childIndex + 1]) {
      childIndex++;
    }
    // 比较父节点和最大子节点的大小
    if (temp >= nums[childIndex]) {
      break;
    }
    // 进行交换
    nums[i] = nums[childIndex];
    i = childIndex;
    childIndex = 2 * i + 1;
  }
  nums[i] = temp;
}
// @lc code=end
