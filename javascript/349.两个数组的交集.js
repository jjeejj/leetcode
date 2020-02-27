/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 该方法利用双指针
var intersection = function(nums1, nums2) {
    // 利用内置的排序方法进行排序
    nums1.sort((a,b)=> { return a - b});
    nums2.sort((a,b)=> { return a - b});
    // 保存结果
    var res = new Set();
    var p = 0;
    var q = 0;
    while(p < nums1.length && q < nums2.length) {
        if (nums1[p] > nums2[q]) {
            q++;
        } else if(nums1[p] < nums2[q]) {
            p++;
        } else {
            res.add(nums1[p]);
            p++;
            q++;
        };
    };
    return Array.from(res);
};

// 利用 Set 的原生方法
var intersection = function(nums1, nums2) {
    var num2 = new Set(nums2);
    var res = new Set(nums1.filter((x) => {return num2.has(x)}));
    return [...res];
};
// @lc code=end

