/**
 * 堆排序
*/
function heapSort(arr) {
  // 构建堆
  for (let i = ((arr.length - 1) >> 1); i >= 0; i--) {
    downAdjust(arr, i, arr.length)
  }
  // 排序
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    downAdjust(arr, 0, i);
  }
  return arr;
};

/**
 * 构建最大堆
 * 堆节点的下沉操作
 * @param {待排序的数组} arr 
 * @param {待下沉的父节点} i 
 * @param {堆的有效长度} length 
 */
function downAdjust(arr, i, length) {
  let temp = arr[i];
  // 定位父节点的左节点
  let childIndex = 2 * i + 1;
  while (childIndex < length) {
    // 或者左右子节点中值最大的
    if ((childIndex + 1) < length && arr[childIndex] < arr[childIndex + 1]) {
      childIndex++;
    }
    // 毕竟父节点和最大子节点的大小
    if (temp >= arr[childIndex]) {
      break;
    };
    // 进行交换
    arr[i] = arr[childIndex];
    i = childIndex;
    childIndex = 2 * i + 1;
  }
  arr[i] = temp;
}

console.log(heapSort([1]))