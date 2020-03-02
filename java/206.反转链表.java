/*
 * @lc app=leetcode.cn id=206 lang=java
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        };
        // 哨兵节点
        ListNode sentryNode = new ListNode(0);
        sentryNode.next = head;
        ListNode preNode = head; // 开始反转的前置节点
        ListNode currentNode = null; // 需要前置的节点
        while(preNode.next != null) {
            currentNode = preNode.next;
            preNode.next = currentNode.next;
            currentNode.next = sentryNode.next;
            sentryNode.next = currentNode;
        };
        return sentryNode.next;
    }
}
// @lc code=end

