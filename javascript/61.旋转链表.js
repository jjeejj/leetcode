/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
        if (!head || !head.next) {
            return head;
        };
        // 获取链表的长度, 时间复杂度尾O(n)
        var current = head;
        var length = 1;
        var tail;
        while(current.next) {
            length++;
            current = current.next;
        };
        tail = current; // 尾指针
        tail.next = head; // 尾指针 指向头指针形成环
    
        // 得到需要移动的次数
        var moveCount = k % length;
    
        // 在 length - moveCount 断开环
        var i = 1;
        while (i < (length - moveCount)) {
            i++;
            head = head.next;
        };
        var new_head = head.next;
        head.next = null;
    
        return new_head;
};
// @lc code=end

