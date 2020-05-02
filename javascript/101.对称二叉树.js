/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (49.27%)
 * Likes:    740
 * Dislikes: 0
 * Total Accepted:    128.9K
 * Total Submissions: 253.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
        return true;
    };
    return isMirror(root.left, root.right);
};
/**
 * 一个树的左节点 和另一树的右几点相等
*/
// 递归的解法
function isMirror (leftNode, rightNode) {
    if (leftNode == null && rightNode == null) {
        return true;
    };
    if (leftNode == null || rightNode == null) {
        return false;
    };
    return (leftNode.val == rightNode.val) 
        && isMirror(leftNode.left, rightNode.right) 
        && isMirror(leftNode.right, rightNode.left)
};

// 迭代的解法
function isSymmetric1(root) {
    if(!root) {
        return true;
    };
    var queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length > 0) {
        var leftNode = queue.shift();
        var rightNode = queue.shift();
        if (leftNode == null && rightNode == null) {
            return true;
        };
        if (leftNode == null || rightNode == null) {
            return false;
        };
        if (leftNode.val != rightNode.val) {
            return false;
        };
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    };
    return true;
};
// @lc code=end

