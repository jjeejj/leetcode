/*
 * @lc app=leetcode.cn id=206 lang=c
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* reverseList(struct ListNode* head){
    if (head == NULL || head->next == NULL) {
        return head;
    };
    // 哨兵节点
    struct ListNode sentryNode;
    sentryNode.val = 0;
    sentryNode.next = head;
    struct ListNode* preNode = head; // 开始反转的前置节点
    struct ListNode* currentNode = head->next; // 需要前置的节点
    while(preNode->next != NULL) {
        currentNode = preNode->next;
        preNode->next = currentNode->next;
        currentNode->next = sentryNode.next;
        sentryNode.next = currentNode;
    };
    return sentryNode.next;
}


// @lc code=end

