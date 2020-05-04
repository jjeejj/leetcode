/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (71.56%)
 * Likes:    518
 * Dislikes: 0
 * Total Accepted:    166.9K
 * Total Submissions: 228.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
 * @return {number}
 */
var maxDepth = function(root) {
    return deep(root);
};

var deep = function (node) {
    if (node == null) {
        return 0;
    };
    return Math.max(deep(node.left), deep(node.right)) + 1;
};

// 广度优先算法
var maxDepth = function(root) {
    var queue = [], resDeep = 0;
    queue.push({
        node: root,
        deep: 1
    });
    while(queue.length > 0) {
        var nodeObj = queue.shift();
        var node =  nodeObj.node; // 当前节点
        if (node != null) {
            var deep = nodeObj.deep;
            resDeep = Math.max(deep, resDeep);
            // 加入左右节点
            queue.push({
                node: node.left,
                deep: deep + 1
            });
            queue.push({
                node: node.right,
                deep: deep + 1
            });
        };
    };
    return resDeep;
};
// @lc code=end

