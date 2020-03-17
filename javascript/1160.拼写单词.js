/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    // 结果的字符串的长度
    var resLen = 0;
    // 统计字符出现的次数
    var charsMap = new Map();
    for (var char of chars) {
        charsMap.set(char,(charsMap.has(char) ? charsMap.get(char) : 0) + 1);
    };
    // 挨个遍历单词，看是否可以拼接成功
    for (var word of words) {
        var wordMap = new Map();
        for (var w of word) {
            wordMap.set(w,(wordMap.has(w) ? wordMap.get(w): 0) + 1);
        };
        // 判断是否满足
        var isEnough = true;
        for (var w of word) {
            if (!charsMap.has(w)  || (wordMap.get(w) > charsMap.get(w))) {
                isEnough = false;
                break;
            };
        };
        if (isEnough) {
            resLen += word.length;
        };
    };
    return resLen;
};
// @lc code=end

