/**
 * 
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
 * 不占用额外内存空间能否做到？
 * 示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 该解法不是在原数组的基础上解的
var rotate = function(matrix) {
    var row = matrix.length, col = matrix[0].length;
    // 声明一个结果数组
    var result = [];
    for (var i = 0; i < row; i++) {
        result.push([]);
        for (var j = 0; j < col; j++) {
            result[i][j] = 0;
        };
    };
    // 进行选择数组 90度
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            result[j][col - 1 - i] = matrix[i][j];
        };
    };
    // 赋值 matrix
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            matrix[i][j] = result[i][j];
        };
    };
    return matrix;
};

// 在原数组空间 解题 解法1
var rotate = function(matrix) {
    var row = matrix.length, col = matrix[0].length;
    // 对角线替换
    for (var i = 0; i < row; i++) {
        for (var j = i; j < col; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        };
    };
    // 然后每一行进行反转
    matrix.forEach(row=> row.reverse());
    return matrix;
};