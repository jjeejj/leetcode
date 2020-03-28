/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    // 排序，按照单词的长度进行排序,字母长的在前面
    words.sort((a, b) => {return b.length - a.length});
    var resultStr = "";
    for (var word of words) {
        if (resultStr.indexOf(word + "#") == -1) {
            resultStr += word + "#";
        };
    };
    return resultStr.length;
};

// 使用 trie 数进行解法, 英语单词有 26 个小写字母，所有有可能有 26个子节点
function TireNode(val) {
    this.val = val;
    this.child = [];
};

// 向trie 节点数 插入一个单词
function insert() {

};
// @lc code=end

