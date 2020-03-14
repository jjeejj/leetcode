/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (63.00%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    44.2K
 * Total Submissions: 69.2K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * 例如，给定三角形：
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 说明：
 * 
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 自顶向下
var minimumTotal = function(triangle) {
    if (triangle.length == 1) {
        return triangle[0][0];
    };
    var maxRow = triangle.length;
    // 计算每个节点的最小值
    for (var i = 1; i < maxRow; i++) {
        for (var j = 0; j <= i; j++) {
            // 处理最左边的情况
            if (j == 0) {
                triangle[i][j] += triangle[i-1][j];
            } else if (j == i) { // 处理最右边的情况
                triangle[i][j] += triangle[i-1][j-1];
            } else { //             // 中间的情况
                triangle[i][j] += Math.min(triangle[i-1][j], triangle[i-1][j-1]);
            };
        };
    };
    // 寻找最小值
    var minimumRes = triangle[maxRow-1][0];
    for (var j = 1; j <= maxRow; j++) {
        minimumRes = (minimumRes > triangle[maxRow-1][j] ? triangle[maxRow-1][j]: minimumRes);
    }
    return minimumRes;
};

// 自底向上
var minimumTotal2 = function(triangle) {
    if (triangle.length == 1) {
        return triangle[0][0];
    };
    var maxRow = triangle.length;
    for (var i = maxRow -2; i >= 0; i--) {
        for (var j = 0; j <= i; j++ ) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
        };
    };
    return triangle[0][0];
};
// @lc code=end

