/*
 * @lc app=leetcode.cn id=110 lang=c
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool isBalanced(struct TreeNode* root){
        if (root == NULL) {
            return true;
        }
        if (!isBalanced(root->left)) {
            return false;
        }
        if (!isBalanced(root->right)) {
            return false;
        }
        if (abs(deep(root->left) - deep(root->right)) > 1) {
            return false;
        }
        return true;
}

int deep(struct TreeNode* node) {
    if (node == NULL) {
        return 0;
    }
    int leftD = deep(node->left);
    int rightD = deep(node->right);
    if (leftD >= rightD) {
        return 1 + leftD;
    } else {
        return 1 + rightD;
    }
}


// @lc code=end

