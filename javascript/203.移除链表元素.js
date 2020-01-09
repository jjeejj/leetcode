/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 增加哨兵节点
    var sentryNode = new ListNode(0);
    sentryNode.next = head;
    var prev = sentryNode;
    while(head) {
        if (head.val == val) {
            prev.next = head.next;
        } else {
            prev = prev.next;
        };
        head = head.next;
    }
    return sentryNode.next;
};

// 使用递归的解法
var removeElements2 = function(head, val) {
    if (!head) {
        return head;
    };
    head.next = removeElements2(head.next, val);
    if (head.val == val) {
        return head.next;
    } else {
        return head;
    };
};
// @lc code=end

