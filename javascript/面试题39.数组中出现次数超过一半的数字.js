/** *
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2

 

限制：

1 <= 数组长度 <= 50000
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var coumtMap = new Map();
    for (var num of nums) {
        var count = coumtMap.has(num) ? (coumtMap.get(num) + 1) : 1;
        if (count >= (nums.length >> 1)) {
            return num;
        };
        coumtMap.set(num, count);
    };
};

// 该题还可以是还有 摩尔投票法 进行解法 与该题 一致 [169.多数元素]