/**
 * 插入排序
 * 对比当前元素在之前已经排过序的位置
*/
function insertSort (arr) {
    var j, k;
    for (var i = 1; i < arr.length; i++) {
        // 判断当前的值在之前应排序的值的哪个位置
        k = arr[i];
        j = i - 1;
        while (j >= 0 && k < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        };
        arr[j+1] = k;
    };
    return arr;
};

// console.log(insertSort([3,4,8,5,1,4,5]));