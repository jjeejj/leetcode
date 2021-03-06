/**
 * 给定一棵二叉树，如下图所示，树中的结点稍微有点变化，定义如下：
 * 希望你能修改二叉树里所有的 next 指针，使其指向右边的结点，如果右边没有结点，那么设置为空指针。
 * struct Node {

    int val = 0;

    Node *left = null;

    Node *right = null;

    Node *next = null;

  }
 */
class Node {
  val: number;

  left?: TreeNode | null;

  right?: TreeNode | null;

  next?: TreeNode | null;
  }
}

function nextTreeNode(root: Node | null): void {
  // 队列
  let queue = [];
  if (root) {
    queue.push(root)
  }
  while (queue.length > 0) {
    let currLen = queue.length;
    for (let i = 0; i < currLen; i++) {
      // 当前节点出队列
      let currNode = queue.shift();
      if (i == currLen - 1) {
        currNode.next = null
      } else {
        currNode.next = queue[0];
      };
      // 当前节点的字节的入队
      if (currNode.left !== null) {
        queue.push(currNode.left)
      };
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }
  }
}
