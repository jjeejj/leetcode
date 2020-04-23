/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hash = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hash[key] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    delete this.hash[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return !(this.hash[key] == undefined);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

