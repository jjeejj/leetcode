/*
 * @lc app=leetcode.cn id=658 lang=golang
 *
 * [658] 找到 K 个最接近的元素
 *
 * https://leetcode-cn.com/problems/find-k-closest-elements/description/
 *
 * algorithms
 * Medium (45.20%)
 * Likes:    420
 * Dislikes: 0
 * Total Accepted:    69.2K
 * Total Submissions: 144.5K
 * Testcase Example:  '[1,2,3,4,5]\n4\n3'
 *
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 *
 * 整数 a 比整数 b 更接近 x 需要满足：
 *
 *
 * |a - x| < |b - x| 或者
 * |a - x| == |b - x| 且 a < b
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：arr = [1,2,3,4,5], k = 4, x = 3
 * 输出：[1,2,3,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：arr = [1,2,3,4,5], k = 4, x = -1
 * 输出：[1,2,3,4]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10^4
 * arr 按 升序 排列
 * -10^4 <= arr[i], x <= 10^4
 *
 *
 */
package main

// @lc code=start
func findClosestElements(arr []int, k int, x int) []int {
		// 查找距离 x 最近的左右指针
		left := 0             // 左边都是小于, 默认第一个元素
		right := len(arr) - 1 // 右边都是大于等于的，默认是最后一个元素
		for {
			if arr[left] >= x {
			ft--
				break
			} else if left == len(arr-11{
			eak
		 else {
			left++
		}
	}
	for {
		if arr[right] < x {
			right++
			break
		} else if right == 0 {
			break
		} else {
			right--
		}
	}
	for {
		if k == 0 {
			break
			}
			if left < 0 {
				right++
			} else if right >= len(arr) {
	left--
	} else if arr[right]-x >= x-arr[left] {
				left--
			} else {
				right++
			}
			k--
		}
		return arr[left+ 1  : right]
}
