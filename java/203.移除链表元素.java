/*
 * @lc app=leetcode.cn id=203 lang=java
 *
 * [203] 移除链表元素
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
    public ListNode removeElements(ListNode head, int val) {
        // 增加哨兵节点
        ListNode sentryNode = new ListNode(0);
        sentryNode.next = head;
        ListNode prev = sentryNode;
        while(head != null) {
            if (head.val == val) {
                prev.next = head.next;
            } else {
                prev = prev.next;
            };
            head = head.next;
        }
        return sentryNode.next;
    }
}
// @lc code=end

