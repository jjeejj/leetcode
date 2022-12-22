/*
 * @lc app=leetcode.cn id=1447 lang=golang
 *
 * [1447] 最简分数
 *
 * https://leetcode-cn.com/problems/simplified-fractions/description/
 *
 * algorithms
 * Medium (61.28%)
 * Likes:    89
 * Dislikes: 0
 * Total Accepted:    40.9K
 * Total Submissions: 60.5K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 2
 * 输出：["1/2"]
 * 解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
 *
 * 示例 2：
 *
 * 输入：n = 3
 * 输出：["1/2","1/3","2/3"]
 *
 *
 * 示例 3：
 *
 * 输入：n = 4
 * 输出：["1/2","1/3","1/4","2/3","3/4"]
 * 解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。
 *
 * 示例 4：
 *
 * 输入：n = 1
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 100
 *
 *
 */
package main

import "fmt"

// @lc code=start
func simplifiedFractions(n int) []string {
	var result []string
	for i := 1; i <= n; i++ {
		for j := 1; j < i; j++ {
			if qcd(i, j) == 1 {
				result = append(result, fmt.Sprintf("%d/%d", j, i))
			}
		}
	}
	return result
}

func qcd(a, b int) int {
	for b != 0 {
		b, a = a%b, b
	}
	return a
}

// @lc code=end
