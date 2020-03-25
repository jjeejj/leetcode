/*
 * @lc app=leetcode.cn id=892 lang=javascript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 第一种解法：使用减法的解法
var surfaceArea = function(grid) {
    var N = grid.length;
    var cubes = 0, faces = 0; // 立方体的和接触面的数量
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            if (grid[i][j] > 0) { // 每个位置有柱体 才进行计算
                cubes += grid[i][j];
                faces += (grid[i][j] - 1);
                // 判断与上面的是否有接触面
                if (i > 0) {
                    faces += Math.min(grid[i][j], grid[i-1][j]);
                };
                // 判断与左边的是否有接触面
                if (j > 0) {
                    faces += Math.min(grid[i][j], grid[i][j-1]);
                };
            };
        };
    };
    return 6 * cubes - 2 * faces;
};
// 第二种解法：使用加法解题
var surfaceArea2 = function(grid) {
    var N = grid.length;
    var result = 0; // 立方体暴露的面
    var pointX = [-1, 0, 1, 0]; // 某一个位置的X 坐标4个方向的相对位置
    var pointY = [0, 1, 0, -1]; // 某一个位置的Y 坐标4个方向的相对位置
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            if (grid[i][j] > 0) {
                result += 2; // 每个柱的上面两个面
                // 计算周报的4个方向提供的面
                for (var k = 0; k < pointX.length; k++) {
                    var tempI = i + pointX[k], tempJ = j + pointY[k];
                    if (tempI >= 0 && tempI < N && tempJ < N && tempJ >= 0) {
                        result += ((grid[i][j] > grid[tempI][tempJ]) ? (grid[i][j] - grid[tempI][tempJ]) : 0);
                    } else {
                        result += grid[i][j]
                    };
                };
            };
        };
    };
    return result;
};
// @lc code=end

