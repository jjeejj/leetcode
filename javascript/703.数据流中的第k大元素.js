/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
// 构造一个最小堆，大小为 k 顶点就是 第 k 大的元素
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = []; //堆信息
    // 初始化堆的信息
    for (var num of nums) {
        if (this.heap.length == 0) {
            this.heap.push(num);
        } else if (this.heap.length == k){ // 堆满，和第一个元素进行比较
            if (num > this.heap[0]) {
                this.heap[0] = num;
                // 然后进行下沉
                this.shiftDown(0);
            }
        } else {
            this.heap.push(num);
            // 然后进行上浮
            this.shiftUp(this.heap.length -1);
        }
    }
};

// 堆元素上浮
KthLargest.prototype.shiftUp = function(i) {

};

// 堆元素下沉
KthLargest.prototype.shiftDown = function(i) {

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // 长度小于指定的 k 直接返回
    if (this.heap < k - 1) {
        return;
    };
    if (val > this.heap[0]) {
        this.heap[0] = num;
        // 然后进行下沉
        this.shiftDown(0);
    } else {
        this.heap.push(num);
        // 然后进行上浮
        this.shiftUp(this.heap.length -1);
    }
    return this.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

