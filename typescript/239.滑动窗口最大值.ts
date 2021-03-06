/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.55%)
 * Likes:    875
 * Dislikes: 0
 * Total Accepted:    129.4K
 * Total Submissions: 261.1K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回滑动窗口中的最大值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,-1], k = 1
 * 输出：[1,-1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：nums = [9,11], k = 2
 * 输出：[11]
 *
 *
 * 示例 5：
 *
 *
 * 输入：nums = [4,-2], k = 2
 * 输出：[4]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 * 1
 *
 *
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  // 结果
  let res = [];
  // 数组的长度小于 k 直接返回
  if (nums.length < k) {
    return res;
  }
  // 采用双端队列, 单调递减队列, 保存索引，保存数组的值的情况，可以有重复值的情况
  let Q = [];
  // 入队
  let push = function (index) {
    while (Q.length >= 0 && nums[Q[Q.length - 1]] < nums[index]) {
      Q.pop();
    }
    Q.push(index);
  };
  // 出队
  let pop = function (index) {
    while (Q.length >= 0 && Q[0] == index) {
      Q.shift();
    }
  };
  // 计算每个区间的最大值
  for (let i = 0; i < nums.length; i++) {
    push(i);
    // 保证队列中的比较的数据够指定个数
    if (i < k - 1) {
      continue;
    }
    // 获取最大值
    res.push(nums[Q[0]]);
    // 尝试移除队列数据
    pop(i - k + 1);
  }
  return res;
}
// @lc code=end
