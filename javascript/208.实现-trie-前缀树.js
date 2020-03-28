/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

/** 
 * TrieNode
*/
var TrieNode = function() {
    this.isEnd = false; // 标识是否是单词结束节点
    /** * 
     * 这里的数据格式为为 "a": TrieNode 即字母对应的节点
    */
    this.next = {};
};
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root  = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) {
        return;
    };
    // 获取根节点
    var node = this.root;
    for (var w of word) {
        if (!node.next[w]) {
            node.next[w] = new TrieNode();
        };
        node = node.next[w];
    };
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) {
        return false;
    };
    // 获取根节点
    var node = this.root;
    for (var w of word) {
        if (!node.next[w]) {
            return false;
        };
        node = node.next[w];
    };
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

