/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 增加一个哨兵节点，进行反转
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    };
    // 哨兵节点
    var sentryNode = new ListNode(0);
    sentryNode.next = head;
    var preNode = head; // 开始反转的前置节点
    var currentNode; // 需要前置的节点
    while(preNode.next) {
        currentNode = preNode.next;
        preNode.next = currentNode.next;
        currentNode.next = sentryNode.next;
        sentryNode.next = currentNode;
    };
    return sentryNode.next;
};
// @lc code=end

