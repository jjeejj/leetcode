/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// // 构造一个最小堆，大小为 k 顶点就是 第 k 大的元素,
var findKthLargest = function(nums, k) {

};
// 交换数组两个索引的上的值
var swap = function(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
// @lc code=end

