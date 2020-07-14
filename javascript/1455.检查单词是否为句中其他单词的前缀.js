/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    var words = sentence.split(' ');
    for (var i = 0; i < words.length; i++) { // 循环的次数
        // 循环比较每个单词与搜索次，判断搜索次是否是某个单词的前缀
        var currentWord = words[i];
        var currentWordLen = currentWord.length;
        if (currentWordLen < searchWord.length) {
            continue;
        };
        var handleIndex = 0;
        while (handleIndex < currentWordLen) {
            if (currentWord[handleIndex] != searchWord[handleIndex]) {
                break;
            }
            handleIndex++;
        };
        if (handleIndex == searchWord.length) {
            return i + 1;
        };
    };
    return -1;
};
// @lc code=end

