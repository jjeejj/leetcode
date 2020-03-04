/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 配合获取某个元素的上右下左的位置
    var ri = [-1, 0, 1, 0], ci = [0, 1, 0, -1];
    // 计算出有多少行 多少列
    var row = grid.length, col = grid[0].length;
    // 声明一个栈，把初始有问题的放到栈中
    var queue = [], depth = new Map();
    for (var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (grid[i][j] == 2) {
                // 保存索引位置，把二维转换为一维
                var index = i * col + j;
                queue.push(index);
                depth.set(index, 0);
            };
        };
    };
    var res = 0; // 返回的分钟数
    // 开始扩散遍历
    while(queue.length > 0) { // 有值
        var index = queue.shift(); // 取出先进的值
        // 计算出对应的位置
        var r = Math.floor(index/col), c = index % col;
        // 扩散到周边4个
        for (var i = 0; i < 4; i++) {
            var nr = r + ri[i], nc = c + ci[i];
            if (nr >=0 && nr < row && nc >= 0 && nc < col && grid[nr][nc] == 1) {
                grid[nr][nc] = 2;
                var nindex = nr * col + nc;
                queue.push(nindex);
                depth.set(nindex, depth.get(index) + 1);
                res = depth.get(nindex);
            };
        }
    };

    // 判断是所有的都已经改变
    for (var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                return -1;
            };
        };
    };
    return res;
};
// @lc code=end

