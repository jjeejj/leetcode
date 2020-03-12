/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.87%)
 * Likes:    479
 * Dislikes: 0
 * Total Accepted:    120.5K
 * Total Submissions: 194.6K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 排序原数组
    nums.sort((a,b) => a -b);
    var len = nums.length, midLen = len>>1, pre = nums[0], preIndex = 0;
    nums.push(null); // 添加一个结尾元素使用
    console.log("nums", nums)
    for (var i = 1; i <= len; i++) {
        if(pre != nums[i]) { // 当前元素不等于上一个元素
            if ((i - preIndex) > midLen) {
                return pre;
            } else {
                pre = nums[i];
                preIndex = i;
            };
        };
    };
};
// @lc code=end

