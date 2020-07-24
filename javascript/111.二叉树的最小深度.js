/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (40.77%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    93.7K
 * Total Submissions: 218.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
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
// 广度优先
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  var queue = [root], deep = 1;
  while (queue.length > 0) {
    var currLevelNum = queue.length;
    for (var i = 0; i < currLevelNum; i++) {
      var currNode = queue.shift();
      if (currNode.left == null && currNode.right == null) {
        return deep;
      }
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    deep++;
  }
  return deep;
};
// 递归写法
var minDepth = function (root) {
  if (root == null) {
    return 0;
  }
  var m1 = minDepth(root.left);
  var m2 = minDepth(root.right);

  return (root.left == null || root.right == null)
    ? m1 + m2 + 1
    : Math.min(m1, m2) + 1;
};
// @lc code=end
