/**
 * 快速排序
*/
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    };
    var pivotIndex = partiton(arr, start, end);
    // 左边
    quickSort(arr, start, pivotIndex - 1);
    // 右边
    quickSort(arr, pivotIndex + 1, end);
};
// 排序的逻辑
function partiton(arr, start, end) {
    // 去基准元素, 取第一个元素
    var pivot = arr[start], left = start, right = end;
    while (right != left) {
        // 
        while (left < right && arr[right] > pivot) {
            right--;
        };
        // 小于等于的
        while (left < right && arr[left] <= pivot) {
            left++;
        };
        if (left < right) {
            exchangeArr(arr, left, right);
        };
    };
    // 交换 left 确定新的基准
    exchangeArr(arr, start, left);
    return left;
};
// 交换数组的两个位置的值
function exchangeArr(arr, i , j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
