/*
 * @lc app=leetcode.cn id=345 lang=golang
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (54.01%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    182K
 * Total Submissions: 333.3K
 * Testcase Example:  '"hello"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 *
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "hello"
 * 输出："holle"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "leetcode"
 * 输出："leotcede"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
func reverseVowels(s string) string {
	yMap := map[string]bool{
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
		"A": true,
		"E": true,
		"I": true,
		"O": true,
		"U": true,
	}
	t := []byte(s)
	n := len(s)
	left, right := 0, n-1
	for left < right {
		for left < n && !yMap[string(t[left])] {
			left++
		}
		for right > 0 && !yMap[string(t[right])] {
			right--
		}
		if left < right {
			t[left], t[right] = t[right], t[left]
			left++
			right--
		}
	}
	return string(t)
}

// @lc code=end

