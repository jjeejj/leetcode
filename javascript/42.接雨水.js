/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (47.63%)
 * Likes:    1102
 * Dislikes: 0
 * Total Accepted:    80.9K
 * Total Submissions: 161.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 求每一列可以存储的水 , 这是最暴力的解法
var trap = function(height) {
    var sum = 0; // 总水量
    if (height.length < 3) {
        return sum;
    };
    // 两端的列不用考虑，因为不可能存储水的，所以从 1 到 length - 2
    for (var i = 1; i < height.length - 1; i++) {
        // 求出每一列左右两边最高的列
        var maxRightHeight = 0;
        for (var m = i + 1; m < height.length; m++) {
            if (height[m] >= maxRightHeight) {
                maxRightHeight = height[m];
            };
        };
        var maxLeftHeight = 0;
        for (var n = i - 1; n >= 0; n--) {
            if (height[n] >= maxLeftHeight) {
                maxLeftHeight = height[n];
            };
        };
        // 求出左右两边最低的墙
        var compareHeight = maxRightHeight > maxLeftHeight ? maxLeftHeight: maxRightHeight;
        // 求出该列能存储的水
        sum += (compareHeight - height[i] > 0) ? compareHeight - height[i] : 0;
    };
    return sum;
};

// 利用动态规划把某列的左右最高列保存起来，这里还可以优化空间，不用保存一个数组，只需要保存前面的一个值就可以了
var trap = function(height) {
    var sum = 0; // 总水量
    if (height.length < 3) {
        return sum;
    };
   // 记录左边最高的墙, 初始化第一列左边为 0
    var maxLeftArr = [0]; 
    for (var i = 1; i < height.length; i++) {
        maxLeftArr[i] = Math.max(maxLeftArr[i-1], height[i-1]);
    };
    // 记录右边最高的墙, 初始化最后一列列右边为 0
    var maxRightArr = [];
    maxRightArr[height.length-1] = 0;
    for (var i = height.length - 2; i >= 0; i--) {
        maxRightArr[i] = Math.max(maxRightArr[i+1], height[i+1]);
    };
    // 两端的列不用考虑，因为不可能存储水的，所以从 1 到 length - 2
    for (var i = 1; i < height.length - 1; i++) {
        // 求出左右两边最低的墙
        var compareHeight = maxRightArr[i] > maxLeftArr[i] ? maxLeftArr[i]: maxRightArr[i];
        // 求出该列能存储的水
        sum += (compareHeight - height[i] > 0) ? compareHeight - height[i] : 0;
    };
    return sum;
};

// 利用栈解题，单调栈
var trap = function(height) {
    var sum = 0; // 总水量
    if (height.length < 3) {
        return sum;
    };
    var stack = [0]; // 单调栈，保存的是 height 值的索引位置
    for (var i = 1; i < height.length; i++) {
        if (height[i] > height[stack[stack.length -1]]) {
            while (stack.length > 0 && height[i] > height[stack[stack.length -1]]) {
                var currPopIndex = stack.pop();
                // 如果值一样就继续弹出
                while (stack.length >0 && height[currPopIndex] == height[stack[stack.length -1]]) {
                    stack.pop();
                };
                // 计算能存储水的量
                if (stack.length > 0) {
                    sum += ((i - stack[stack.length -1] - 1) 
                    * (Math.min(height[i], height[stack[stack.length -1]]) - height[currPopIndex]));
                };
            };
        };
        stack.push(i);
    };
    return sum;
};
// @lc code=end

