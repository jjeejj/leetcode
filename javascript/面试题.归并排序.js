/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 使用归并排序
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    };
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

/** *
 * 进行归并排序
 * @param {Array} nums 原数组
 * @param {Number} left 左边的索引
 * @param {Number} right 右边的索引
 */
function mergeSort(nums, left, right) {
    if (right > left) {
        var mid = left + ((right - left) > 1);
        // 归并左边的元素
        mergeSort(nums, left, mid);
        // 归并右边的元素
        mergeSort(nums, mid + 1, right);

        // 合并两个有序的数组
        mergeArray(nums, left, mid, right);
    };
};

function mergeArray(nums, left, mid, right) {
    var i = left, j = mid + 1, k = 0, tempNums = [];
    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            tempNums[k++] = nums[i++]
        } else {
            tempNums[k++] = nums[j++]
        };
    };
    // 比较完毕后，肯定还有一边有剩余元素的
    while (i <= mid) {
        tempNums[k++] = nums[i++]
    };
    while (j <= right) {
        tempNums[k++] = nums[j++]
    };
    // 把 temp 中的值复制到 nums 的对应位置中
    for (var m = 0; m < tempNums.length; m++) {
        nums[left + m] = tempNums[m];
    };
};

// console.log(sortArray([2,6,8,1,0,6,9,7]));