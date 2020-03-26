/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    var row = board.length, col = board[0].length, Rx, Ry, count = 0, notpArr = ["B", "b", "P"];
    // 首先找到 白色车的位置坐标位置
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (board[i][j] == "R") {
                Rx = i;
                Ry = j;
                break;
            };
        };
    };
    // 判断白色车四周是否可以捕获卒
    // 方向数组
    var dx = [0, -1, 0, 1], dy = [-1, 0, 1, 0];
    for (var d = 0; d < dx.length; d++) {
        var step = 1, tx = Rx, ty = Ry;
        while (true) {
            tx += (dx[d] * step);
            ty += (dy[d] * step);
            if (tx < 0 || tx >= row || ty < 0 || ty >= col || notpArr.includes(board[tx][ty])) {
                break;
            };
            if (board[tx][ty] == "p") {
                count++;
                break;
            };
        }
    }
    // // 左边
    // var leftEnd = Ry - 1;
    // while ( leftEnd >= 0) {
    //     if (notpArr.includes(board[Rx][leftEnd])) {
    //         break;
    //     } else if (board[Rx][leftEnd] == "p") {
    //         count++;
    //         break;
    //     };
    //     leftEnd--;
    // };
    // // 右边
    // var rightStart = Ry + 1;
    // while ( rightStart < col) {
    //     if (notpArr.includes(board[Rx][rightStart])) {
    //         break;
    //     } else if (board[Rx][rightStart] == "p") {
    //         count++;
    //         break;
    //     };
    //     rightStart++;
    // };
    // // 上面
    // var topEnd = Rx - 1;
    // while ( topEnd >= 0) {
    //     if (notpArr.includes(board[topEnd][Ry])) {
    //         break;
    //     } else if (board[topEnd][Ry] == "p") {
    //         count++;
    //         break;
    //     };
    //     topEnd--;
    // };
    // // 下面
    // var bottomStart = Rx + 1;
    // while ( bottomStart < row) {
    //     if (notpArr.includes(board[bottomStart][Ry])) {
    //         break;
    //     } else if (board[bottomStart][Ry] == "p") {
    //         count++;
    //         break;
    //     };
    //     bottomStart++;
    // };
    return count;
};
// @lc code=end

