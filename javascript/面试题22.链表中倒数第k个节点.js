/**
 * [面试题22] 链表中倒数第k个节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 使用快慢指针的方法
var getKthFromEnd = function(head, k) {
    var fast = slow = head;
    // 快指针先走 k 步
    for (var i = 0; i < k-1; i++) {
        fast = fast.next;
    };
    // 当 fast 走到最后就是要求的位置
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    };
    return slow;
};