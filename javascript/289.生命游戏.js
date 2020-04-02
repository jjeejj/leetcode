/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 不是原地排序， 还可以利用复合状态来标识状态 这样空间复杂度 为 O(1)
var gameOfLife = function(board) {
    // 声明一个保存结果的数组
    var result = [], row = board.length, col = board[0].length;
    // 方向数组
    var pointX = [0, -1, -1, -1, 0, 1, 1, 1], 
        pointY = [-1, -1, 0, 1, 1, 1, 0, -1];
    // 遍历原数组
    for (var i = 0; i < row; i++) {
        result.push([]);
        for (var j = 0; j < col; j++) {
            var count = 0; // 活细胞数量
            result[i][j] = board[i][j]; // 初始值
            // 判断周边活细胞数量
            for (var k = 0; k < pointX.length; k++) {
                var tempI = i + pointX[k], tempJ = j + pointY[k];
                if (tempI >= 0 && tempI < row && tempJ >=0 && tempJ < col && board[tempI][tempJ] == 1) {
                    count++;
                };
            };
            if (board[i][j] == 1) { // 之前的是活细胞
                if (count < 2 || count > 3) {
                    result[i][j] = 0;
                };
            } else { // 之前是死细胞
                if (count == 3) {
                    result[i][j] = 1;
                };
            };
        };
    };
    // 赋值到 原数组上
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            board[i][j] = result[i][j];
        };
    };
    return board;
};
// @lc code=end

