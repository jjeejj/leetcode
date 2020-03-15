/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var row = grid.length, col = grid[0].length, res = 0;
    var pointX = [0, -1, 0, 1], pointY = [-1, 0, 1, 0]; // 一个点的4周的相对位置
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                var stack = [], tempRes = 1;
                for (var m = 0; m < pointX.length; m++) {
                    var tempX = i + pointX[m];
                    var tempY = j + pointY[m];
                    if (tempX >= 0 && tempX < row && tempY >= 0 && tempY < col) {
                        stack.push(tempX*col+tempY);
                        tempRes++;
                        grid[tempX][tempY] = 0;
                    };
                };
                while(stack.length > 0) {
                    var tempCurr = stack.pop(), tempCurrX = Math.floor(tempCurr / col), 
                    tempCurrY = tempCurr % col;
                    for (var n = 0; n < pointX.length; n++) {
                        var tempX = tempCurrX + pointX[n];
                        var tempY = tempCurrY + pointY[n];
                        if (tempX >= 0 && tempX < row && tempY >= 0 && tempY < col && grid[tempX][tempY] == 1) {
                            stack.push(tempX*col+tempY);
                            tempRes++;
                            grid[tempX][tempY] = 0;
                        };
                    };
                };
                if (tempRes > res) {
                    res = tempRes;
                };
            };
        };
    };
    return res;
};
// @lc code=end