/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 *
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/description/
 *
 * algorithms
 * Medium (36.64%)
 * Likes:    53
 * Dislikes: 0
 * Total Accepted:    11.7K
 * Total Submissions: 27.5K
 * Testcase Example:  '[[1,0,1],[0,0,0],[1,0,1]]'
 *
 * 你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1
 * 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。
 * 
 * 我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 -
 * x1| + |y0 - y1| 。
 * 
 * 如果我们的地图上只有陆地或者海洋，请返回 -1。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：[[1,0,1],[0,0,0],[1,0,1]]
 * 输出：2
 * 解释： 
 * 海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：[[1,0,0],[0,0,0],[0,0,0]]
 * 输出：4
 * 解释： 
 * 海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= grid.length == grid[0].length <= 100
 * grid[i][j] 不是 0 就是 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    // 使用广度优先遍历的算法
    var queue = [], row = grid.length, col = grid[0].length, depth = new Map();;
    // 遍历所有的陆地
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                var index = i * col + j;
                queue.push(index);
                depth.set(index, 0);
            };
        };
    };
    // 判断是否有陆地
    if(queue.length == 0) {
        return -1;
    };
    // 方向数组
    var directX = [-1, 0, 1, 0], directY = [0, 1, 0, -1], hasOcean = false,res = 0;
    while (queue.length > 0) {
        var point = queue.shift();
        var y = point % col,  x = (point - y) / col;
        for (var k = 0; k < directX.length; k++) {
            var tempX = x + directX[k], tempY = y + directY[k];
            if (tempX < 0 || tempX >= row || tempY < 0 || tempY >= col || grid[tempX][tempY] != 0) {
                continue;
            };
            hasOcean = true;
            // 如果是海洋就标记
           grid[tempX][tempY] = 1;
           var tempIndex = tempX * col + tempY;
           queue.push(tempIndex);
           depth.set(tempIndex, depth.get(point)+1);
           res = depth.get(tempIndex);
        };
    };
    //判断是否有海洋
    if(!hasOcean) {
        return -1;
    };
    // 返回第几轮扩散的数字
    return res;
};
// @lc code=end

