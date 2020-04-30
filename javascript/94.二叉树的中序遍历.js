/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.30%)
 * Likes:    478
 * Dislikes: 0
 * Total Accepted:    147.6K
 * Total Submissions: 207.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];
    helper(root, res);
    return res;
};

// 递归的解法
var helper = function (root, res) {
    if (root != null) {
        // 先访问左节点
        root.left ? helper(root.left, res) : "";
        // 在访问跟节点
        res.push(root.val);
        // 最后访问又节点
        root.right ? helper(root.right, res): "";
    };
};
// @lc code=end

