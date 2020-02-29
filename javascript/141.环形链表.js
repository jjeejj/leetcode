/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
// 使用快慢指针的解法
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    };
    var fast = slow = head;
    while(fast) {
        slow = slow.next;
        fast = fast.next;
        if (fast == null) { // 结束了，没有环
            return false;
        };
        fast = fast.next;
        if (slow == fast) {
            return true;
        };
    };
    return false;
};
// @lc code=end

