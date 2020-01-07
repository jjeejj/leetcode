/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummuHead = new ListNode(0);
    var current =  dummuHead;
    var nextAddNum = 0;
    while (l1 != null || l2 != null) {
        var num1 = l1 != null ? l1.val : 0;
        var num2 = l2 != null ? l2.val : 0;
        var currNum = num1 + num2 + nextAddNum;
        nextAddNum = Math.floor(currNum / 10);
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
};
// @lc code=end

