/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Medium (40.92%)
 * Likes:    489
 * Dislikes: 0
 * Total Accepted:    87.7K
 * Total Submissions: 213K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 * 示例 3：
 *
 *
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 *
 *
 * 示例 4：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 *
 *
 * 示例 5：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * intervals[i].length == 2
 * 0
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0
 *
 *
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let res: number[][] = [],
    newLeft: number = newInterval[0],
    newRight: number = newInterval[1],
    inserted = false;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newLeft) {
      res.push(intervals[i]);
    } else if (intervals[i][0] > newRight) {
      if (!inserted) {
        res.push([newLeft, newRight]);
        inserted = true;
      }
      res.push(intervals[i]);
    } else {
      newLeft = Math.min(newLeft, intervals[i][0]);
      newRight = Math.max(newRight, intervals[i][1]);
    }
  }
  // 如果遍历完成 还是没有插入，说明在最后
  if (!inserted) {
    res.push([newLeft, newRight]);
  }
  return res;
}
// @lc code=end
