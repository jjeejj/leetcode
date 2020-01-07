/*
 * @lc app=leetcode.cn id=2 lang=java
 *
 * [2] 两数相加
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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummuHead = new ListNode(0);
        ListNode current =  dummuHead;
        int nextAddNum = 0;
        while (l1 != null || l2 != null) {
            int num1 = l1 != null ? l1.val : 0;
            int num2 = l2 != null ? l2.val : 0;
            int currNum = num1 + num2 + nextAddNum;
            nextAddNum = currNum / 10;
            currNum = currNum % 10;
            current.next = new ListNode(currNum);
            current = current.next;
            if (l1 != null) {
                l1 = l1.next;
            };
            if (l2 != null) {
                l2 = l2.next;
            };
        };

        if (nextAddNum != 0) {
            current.next = new ListNode(nextAddNum);
        };
        return dummuHead.next;
    }
}
// @lc code=end

