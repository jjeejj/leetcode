/**
 * 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：

给定的 k 保证是有效的。
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 快慢指针的解法
var kthToLast = function(head, k) {
    // 使用快慢指针，快指针先走到第 k 个元素，然后快慢指针一起走，当快指针到尾的时候，慢指针的位置就是倒数第 k 个元素
    var fast = slow = head;
    // 快指针先走 到第 k 个元素
    while (k > 1) {
        fast = fast.next;
        k--;
    };
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    };
    return slow.val;
};

// 递归的解法
var K = 1;
var kthToLast2 = function(head, k) {
    if (head.next == null) {
        return head.val;
    };
    var val = kthToLast2(head.next, k);
    
};
