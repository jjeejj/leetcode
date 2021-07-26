/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.76%)
 * Likes:    1003
 * Dislikes: 0
 * Total Accepted:    129.6K
 * Total Submissions: 289.9K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例 1 :
 *
 *
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 *
 *
 * 说明 :
 *
 *
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 *
 *
 */

// @lc code=start
// // 双层循环 暴力破解
function subarraySum1(nums: number[], k: number): number {
  let count: number = 0;
  for (let end = 0; end < nums.length; end++) {
    let sum = 0;
    for (let start = end; start >= 0; start--) {
      sum += nums[start];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}

function subarraySum(nums: number[], k: number): number {
  let count: number = 0,
    preSum = 0;
  let map: Map<number, number> = new Map();
  // 和为 0的元素个数为 1
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    // 计算之前 的前缀和 是否等于 k - nums[i]
    if (map.has(preSum - k)) {
      count += map.get(preSum - k)!;
    }
    map.set(preSum, map.has(preSum) ? map.get(preSum)! + 1 : 1);
  }
  return count;
}
// @lc code=end
