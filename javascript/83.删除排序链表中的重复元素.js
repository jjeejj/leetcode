/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
        // if (!head || !head.next) {
    //     return head;
    // };
    // var curr = head.next;
    // var pre = head;
    // while(curr) {
    //     if (curr.val == pre.val) {
    //         pre.next = curr.next;
    //     } else {
    //         pre =  curr;
    //     };
    //     curr = curr.next;
    // }
    // return head;

    if (!head || !head.next) {
        return head;
    };
    var curr = head;
    while (curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        };
    };
    return head;

};
// @lc code=end

