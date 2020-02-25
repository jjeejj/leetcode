/*
 * @lc app=leetcode.cn id=110 lang=java
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        if (!isBalanced(root.left)) {
            return false;
        }
        if (!isBalanced(root.right)) {
            return false;
        }
        if (Math.abs(deep(root.left) - deep(root.right)) > 1) {
            return false;
        }
        return true;
    }

    public int deep(TreeNode node) {
        if (node == null) {
            return 0;
        }
        return 1 + Math.max(deep(node.left), deep(node.right));
    }
}
// @lc code=end

