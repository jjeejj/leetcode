/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (58.80%)
 * Likes:    861
 * Dislikes: 0
 * Total Accepted:    185.8K
 * Total Submissions: 310.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
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
// 迭代的写法
var mergeTwoLists = function(l1, l2) {
    // 增加哨兵节点
    var preHeadNode = new ListNode(-1);
    var preNode = preHeadNode;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            preNode.next = l1;
            l1 = l1.next;
        } else {
            preNode.next = l2;
            l2 = l2.next;
        };
        preNode = preNode.next;
    };
    preNode.next = ((l1 == null) ? l2 : l1);
    return preHeadNode.next;
};

// 使用递归的解法
var mergeTwoLists2 = function(l1, l2) {
    if (l1 == null) {
        return l2;
    };
    if (l2 == null) {
        return l1;
    };
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists2(l1.next, l2);
        return l1;
    };
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists2(l1, l2.next);
        return l2;
    };
};
// @lc code=end

