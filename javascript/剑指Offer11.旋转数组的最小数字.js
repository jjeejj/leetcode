/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，
 * 输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

 * @param {number[]} numbers
 * @return {number}
 */
// O(n) 的时间复杂度
var minArray = function (numbers) {
    if (numbers.length == 0) {
        return;
    }
    if (numbers.length == 1) {
        return numbers[0];
    }
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            return numbers[i];
        };
    };
    return numbers[0];
};
// 使用二分法
var minArray1 = function (numbers) {
    if (numbers.length == 0) {
        return;
    };
    var left = 0, right = numbers.length - 1;
    while (left < right) {
        var mid = left + ((rigth - left) >> 1);
        if (numbers[mid] > numbers[right]) { // mid在 左排序数组中
            left = mid + 1;
        } else if (numbers[mid] < numbers[right]) {
            right = mid;
        } else {
            right--;
        };
    };
    return numbers[left];
};