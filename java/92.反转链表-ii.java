/*
 * @lc app=leetcode.cn id=92 lang=java
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 * 
 * @param <ListNode>
 */
class Solution<ListNode> {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode sentryNode = new ListNode(0);
        sentryNode.next = head;
        ListNode preStartNode = sentryNode;
        // 找到要翻转的 m 的前置节点
        for (int i = 1; i < m; i++) {
            preStartNode = preStartNode.next;
        }
        // 翻转 m - n
        ListNode preNode = null; // 开始翻转的时候的前置节点
        ListNode currNode = preStartNode.next; // 开始翻转的当前节点
        for (int j = m ; j <= n; j++) {
            ListNode next = currNode.next;
            currNode.next = preNode;
            preNode = currNode;
            currNode = next; 
        }
        // 讲翻转的链表和未翻转的链表拼接
        preStartNode.next.next = currNode;
        preStartNode.next = preNode;
        return sentryNode.next;
    }
}
// @lc code=end

