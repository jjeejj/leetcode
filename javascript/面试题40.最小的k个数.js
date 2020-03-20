/***
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 示例 1：
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]

示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 使用堆排序
var getLeastNumbers = function(arr, k) {

};

// 该方法不是题目的考点
var getLeastNumbers2 = function(arr, k) {
    arr.sort((a, b) => a -b);
    return arr.slice(0, k);
};