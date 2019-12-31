/*
 * @lc app=leetcode.cn id=61 lang=java
 *
 * [61] 旋转链表
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
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        // 获取链表的长度, 时间复杂度尾O(n)
        ListNode current = head;
        int length = 1;
        ListNode tail;
        while(current.next != null) {
            length++;
            current = current.next;
        };
        tail = current; // 尾指针
        tail.next = head; // 尾指针 指向头指针形成环
    
        // 得到需要移动的次数
        int moveCount = k % length;
    
        // 在 length - moveCount 断开环
        int i = 1;
        while (i < (length - moveCount)) {
            i++;
            head = head.next;
        }
        ListNode new_head = head.next;
        head.next = null;
    
        return new_head;
    }
}
// @lc code=end

