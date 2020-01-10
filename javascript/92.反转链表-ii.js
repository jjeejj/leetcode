/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head || !head.next) {
        return head;
    };
    var sentryNode = new ListNode(0);
    sentryNode.next = head;
    var preStartNode = sentryNode;
    // 找到要翻转的 m 的前置节点
    for (var i = 1; i < m; i++) {
        preStartNode = preStartNode.next;
    };
    var start = preStartNode.next;
    var tail = start.next;
    for (var j = m ; j <= n; j++) { // 另一种解法
        start.next = tail.next;
        tail.next = preStartNode.next;
        preStartNode.next = tail;
        tail = start.next;
    };
    return sentryNode.next;

};
// @lc code=end

