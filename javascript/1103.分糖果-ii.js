/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    var res = [], n = 0, i, temp;
    // 初始化数组
    for (var i = 0; i < num_people; i++) {
        res[i] = 0;
    };
    while (candies > 0) {
        // 当前小朋友的位置
        i = n % num_people;
        ++n;
        temp = candies - n; // 剩余数量
        res[i] = res[i] + (temp > 0 ? n : candies);
        candies = temp;
    };
    return res;
};
// @lc code=end

