/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  if (heights.length == 0) {
    return 0;
  }
  if (heights.length == 1) {
    return heights[0];
  }
  // 柱子左边第一个小于其高度的位置
  let leftMinHeightStrack = [];
  // 单调递增栈, 里面存的是索引位置
  let minStrack = [];
  for (let i = 0; i < heights.length; i++) {
    while (
      minStrack.length > 0 &&
      heights[minStrack[minStrack.length - 1]] >= heights[i]
    ) {
      minStrack.pop();
    }
    leftMinHeightStrack[i] = minStrack.length
      ? minStrack[minStrack.length - 1]
      : -1;
    minStrack.push(i);
  }
  // 柱子右边第一个小于其高度的位置
  let rightMinHeightSreack = [];
  minStrack.length = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    while (
      minStrack.length > 0 &&
      heights[minStrack[minStrack.length - 1]] >= heights[i]
    ) {
      minStrack.pop();
    }
    rightMinHeightSreack[i] = minStrack.length
      ? minStrack[minStrack.length - 1]
      : heights.length;

    minStrack.push(i);
  }
  // 计算每根柱子的最大面积
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let currMax =
      (rightMinHeightSreack[i] - leftMinHeightStrack[i] - 1) * heights[i];
    if (currMax > max) {
      max = currMax;
    }
  }
  return max;
}
// @lc code=end
