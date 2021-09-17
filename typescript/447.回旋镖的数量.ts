/*
 * @lc app=leetcode.cn id=447 lang=typescript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Medium (60.29%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    47.7K
 * Total Submissions: 72.1K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组
 * ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。
 *
 * 返回平面上所有回旋镖的数量。
 *
 *
 * 示例 1：
 *
 *
 * 输入：points = [[0,0],[1,0],[2,0]]
 * 输出：2
 * 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：2
 *
 *
 * 示例 3：
 *
 *
 * 输入：points = [[1,1]]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == points.length
 * 1 <= n <= 500
 * points[i].length == 2
 * -10^4 <= xi, yi <= 10^4
 * 所有点都 互不相同
 *
 *
 */

// @lc code=start
function numberOfBoomerangs(points: number[][]): number {
  let ans: number = 0;
  for (const point of points) {
    let map = new Map<number, number>();
    for (const q of points) {
      let dis = Math.pow(point[0] - q[0], 2) + Math.pow(point[1] - q[1], 2);
      map.set(dis, (map.get(dis) || 0) + 1);
    }
    // 计算回旋数据
    for (const m of map.values()) {
      ans += m * (m - 1);
    }
  }
  return ans;
}
// @lc code=end
