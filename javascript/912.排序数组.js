/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 使用快排
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

var quickSort = function(nums, start, end) {
    if (start >= end) {
        return;
    };
    // 得到基准元素
    var pivotIndex = partition(nums, start, end);
    // 左边的
    quickSort(nums, start, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, end);
};

// 比较的函数
function partition(nums, start, end) {
    // 取第一个元素当做基准元素
    var pivot = nums[start], left = start, right = end;
    while (right != left) {
        // 控制 right 指针左移
        while(left < right && nums[right] > pivot) {
            right--;
        };
        // 控制 left 指针右移
        while(left < right && nums[left] <= pivot) {
            left++;
        };
        // 这个时候 left的值大于 pivot， right 的值 小于 pivot ， 交换 left 和 right 的值
        if (left < right) {
            exchangeArr(nums, left, right);
        };
    };
    // 交换基准点和 right 和 left 的相交点
    exchangeArr(nums, start, left);
    return left;
};
// 交换数组的两个位置的值
function exchangeArr(arr, i , j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
// @lc code=end

