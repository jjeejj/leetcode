/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
 * 因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
示例 1：

输入：m = 2, n = 3, k = 1
输出：3

示例 1：

输入：m = 3, n = 1, k = 0
输出：1

提示：
    1 <= n,m <= 100
    0 <= k <= 20
*/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 使用广度优先解决 队列
var movingCount = function(m, n, k) {
    // 初始化一个 m * n 的数组 都为 0
    var result = 1, arrs = [];
    for (var i = 0; i < m; i++) {
        arrs.push([]);
        for (var j = 0; j < n; j ++) {
            arrs[i][j] = 0;
        };
    };
    var queue = [];
    // 方向数组 两个方向 右，下
    var pointX = [0, 1], pointY = [1, 0];
    if (k == 0) {
        return 1;
    };
    queue.push(0), arrs[0][0] = 1; // 添加左上角的初始元素
    while (queue.length > 0) {
        // 取出前面的值
        var point = queue.shift();
        var y = point % n, x = (point - y) / n;
        // 两个方向 右，下
        for (var i = 0; i < pointX.length; i++) {
            var tempX = x + pointX[i], tempY = pointY[i] + y;
            if (tempX < 0 || tempX >=m || tempY < 0 || tempY >=n || arrs[tempX][tempY] != 0) {
                continue;
            };
            arrs[tempX][tempY] = 1;
            // 求坐标的和
            var sumX = sum(tempX), sumY = sum(tempY);
            if ((sumX + sumY) <= k) {
                queue.push(tempX * n + tempY);
                result++;
            };
        };
    };
    return result;
};

function sum (num) {
    var result = 0;
    while (num >= 10) {
        var modNum = num % 10;
        result += modNum;
        num = (num - modNum) / 10;
    };
    return result + num;
};