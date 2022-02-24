/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (62.35%)
 * Likes:    971
 * Dislikes: 0
 * Total Accepted:    229.1K
 * Total Submissions: 367.1K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * k 的取值范围是 [1, 数组中不相同的元素的个数]
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 *
 *
 *
 *
 * 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
 *
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  let numsCountMap: Map<number, number> = new Map(),
    res: number[] = []; // 小顶堆
  for (let i = 0; i < nums.length; i++) {
    let curValue = nums[i];
    numsCountMap.set(
      curValue,
      numsCountMap.has(curValue) ? numsCountMap.get(curValue) + 1 : 1
    );
  }
  for (let [key, value] of numsCountMap) {
    let isAdjust = false;
    if (res.length < k) {
      res.unshift(key);
      isAdjust = true;
    } else if (numsCountMap.get(res[0]) < value) {
      res[0] = key;
      isAdjust = true;
    }

    if (isAdjust) {
      for (let i = (res.length - 1) >> 1; i >= 0; i--) {
        downAdjust1(res, numsCountMap, i);
      }
    }
  }
  return res;
}

function downAdjust1(
  res: number[],
  numsCountMap: Map<number, number>,
  i: number
) {
  let topValue = res[i];
  let childIndex = 2 * i + 1;
  while (childIndex < res.length) {
    if (
      childIndex + 1 < res.length &&
      numsCountMap.get(res[childIndex]) > numsCountMap.get(res[childIndex + 1])
    ) {
      childIndex++;
    }
    if (numsCountMap.get(res[i]) <= numsCountMap.get(res[childIndex])) {
      break;
    }
    res[i] = res[childIndex];
    i = childIndex;
    childIndex = 2 * i + 1;
  }
  res[i] = topValue;
}
// @lc code=end
