/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null || head.next == null) {
        return true;
    };
    var prev = null;
    var next = head;
    var slow = head;
    var fast = head;
    // 找到中间节点，并且把前半部分逆序
    while (fast && fast.next) {
        fast = fast.next.next;
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    };

    // 链表的长度 为奇数的时候， slow 节点需要往后移动一位
    if(fast != null) {
        slow = slow.next;
    };

    // 判断回文
    while (slow != null) {
        if (slow.val != prev.val) {
            return false;
        };
        slow = slow.next;
        prev = prev.next;
    };

    return true;
};
// @lc code=end

