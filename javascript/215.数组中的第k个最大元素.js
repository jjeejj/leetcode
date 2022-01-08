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
var findKthLargest = function (nums, k) {
    // 构建堆
    for (let i = (nums.length - 1) >> 1; i >= 0; i--) {
        downAdjust(nums, i, nums.length);
    }
    // 排序
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        let temp = nums[i];
        nums[i] = nums[0];
        nums[0] = temp;
        downAdjust(nums, 0, i);
    }
    return nums[0];
};
// 堆节点下沉调整
function downAdjust(nums, i, length) {
    let temp = nums[i];
    // 定位父节点的左节点
    let childIndex = 2 * i + 1;
    while (childIndex < length) {
        // 或者左右子节点中值最小的
        if (childIndex + 1 < length && nums[childIndex] < nums[childIndex + 1]) {
            childIndex++;
        }
        // 比较父节点和最大子节点的大小
        if (temp >= nums[childIndex]) {
            break;
        }
        // 进行交换
        nums[i] = nums[childIndex];
        i = childIndex;
        childIndex = 2 * i + 1;
    }
    nums[i] = temp;
}
// @lc code=end

