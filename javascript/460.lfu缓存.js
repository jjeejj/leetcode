/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 *
 * https://leetcode-cn.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (33.48%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    4.4K
 * Total Submissions: 12.1K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * 设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。
 * 
 * get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
 * put(key, value) -
 * 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。
 * 
 * 进阶：
 * 你是否可以在 O(1) 时间复杂度内执行两项操作？
 * 
 * 示例：
 * 
 * 
 * LFUCache cache = new LFUCache( 2 / )  capacity (缓存容量) 
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回 1
 * cache.put(3, 3);    // 去除 key 2
 * cache.get(2);       // 返回 -1 (未找到key 2)
 * cache.get(3);       // 返回 3
 * cache.put(4, 4);    // 去除 key 1
 * cache.get(1);       // 返回 -1 (未找到 key 1)
 * cache.get(3);       // 返回 3
 * cache.get(4);       // 返回 4
 * 
 * */

// @lc code=start
/**
 * 链表 值节点
 * @param {*} key 
 * @param {*} value 
 */
var Node = function(key, value){
    this.freq = 1;
    this.value = value;
    this.key = key; // 节点的 key
    this.pre = null; // 前置节点
    this.next = null; // 后一个节点的指针
};

/**
 * 双向 循环链表
 */
var DoublyLinkedList = function() {
    // 初始化两个空解决，相当于首尾固定
    this.head = new Node(); // 头节点
    this.tail = new Node();// 尾节点
    this.head.next = this.tail;
    this.tail.pre = this.head;
};

/**
 * removeNode 链表删除节点
 */
DoublyLinkedList.prototype.removeNode = function (node) {
    // 要删除的前一个节点的指向下一个节点
    node.pre.next = node.next;
    // 下一个节点 的前一个节点之前的节点
    node.next.pre = node.pre;
};

/**
 * 链表添加节点
*/
DoublyLinkedList.prototype.addNode = function (node) {
    // 插入的是链表尾部 this.tail 的前面
    // 将该节点的下一个节点设置为头节点
    node.next = this.tail;
    // 原尾节点的前一个节点的下一个节点设置为该节点
    this.tail.pre.next = node;

    // 将该节点的前一个节点设置为 之前为节点的前节点
    node.pre = this.tail.pre;

    // 将尾节点的前一个节点设置为该节点
    this.tail.pre = node;

};

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity; // 容量
    this.size = 0; // 当前已经使用的大小
    this.minFreq = 0; // 当前最小的使用频次
    this.cacheMap = new Map(); // key-value map
    this.freqMap = new Map(); // 频率-(key，value，频率)， 每一个频次是一个双向链表, 后面使用的插入到节点后面，也就是最后使用的
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.cacheMap.get(key)) {
        return -1;
    };
    // 存在，获取值
    var node = this.cacheMap.get(key);
    // 更新该节点
    this.inceFreq(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity == 0) {
        return;
    };
    // 获取值
    var node = this.cacheMap.get(key);
    // 如果节点存在
    if (node) {
        node.value = value;
        // 更新该节点
        this.inceFreq(node);
    } else {
        // 如果容量用完了，就使用最小频次的删除节点
        if (this.size == this.capacity) {
            // 获取使用最小频次的链表
            var minFreqLinkList = this.freqMap.get(this.minFreq);
            // 删除节点后面的节点信息
            this.cacheMap.delete(minFreqLinkList.head.next.key)
            minFreqLinkList.removeNode(minFreqLinkList.head.next);
            this.size--;
        };
        //将该值封装成节点并放进 cacheMap 中
        node = new Node(key, value);
        this.cacheMap.set(key, node);
        // 获取使用频率为 1 的双向链表
        let linkedList = this.freqMap.get(1);
        if (!linkedList) {
            linkedList = new DoublyLinkedList()
            this.freqMap.set(1, linkedList)
        };
        linkedList.addNode(node);
        this.size++;
        this.minFreq = 1;
    };
};

/** 
 * 更新某个 key 的使用频次
*/
LFUCache.prototype.inceFreq = function(node) {
    // 获取该 节点 的使用频次
    var freq = node.freq;
    // 获取该频次对应的链表
    var freqLinkList = this.freqMap.get(freq);
    // 从旧的频次中删除该节点
    freqLinkList.removeNode(node);
 
    // 判断是否更新最小使用频次的值 this.minFreq
    if (freq == this.minFreq && freqLinkList.head.next == freqLinkList.tail) {
        this.minFreq = freq + 1;
    };
    node.freq++;
    // 获取新的使用频次链表
    var newFreqLinkList = this.freqMap.get(freq+1);
    // 如果链表为空，则新建链表，并把值放入进去
    if (!newFreqLinkList) {
        newFreqLinkList = new DoublyLinkedList();
        this.freqMap.set(freq+1, newFreqLinkList)
    };
    // 将节点放到新的链表中
    newFreqLinkList.addNode(node);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// @lc code=end

