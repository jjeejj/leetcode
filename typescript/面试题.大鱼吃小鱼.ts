/*
 * 在水中有许多鱼，可以认为这些鱼停放在 x 轴上。再给定两个数组 Size，Dir，
 Size[i] 表示第 i 条鱼的大小，Dir[i] 表示鱼的方向 （0 表示向左游，1 表示向右游）。
  这两个数组分别表示鱼的大小和游动的方向，并且两个数组的长度相等。
  
  鱼的行为符合以下几个条件:

 * 所有的鱼都同时开始游动，每次按照鱼的方向，都游动一个单位距离；

 * 当方向相对时，大鱼会吃掉小鱼；

 * 鱼的大小都不一样。

 * 输入：Size = [4, 2, 5, 3, 1], Dir = [1, 1, 0, 0, 0]

 * 输出：3
 * 大鱼吃小鱼
 * 
 * 消除问题
 */

function solution(size: number[], dir: number[]): number {
  // 鱼小于等于1的直接返回鱼的条数
  if (size.length <= 1) {
    return size.length;
  }
  let left = 0,
    right = 1;

  let restFishArr: number[] = []; // 保存剩余鱼的索引位置
  for (let i = 0; i < size.length; i++) {
    let currFishSize = size[i];
    let currFishDir = dir[i];
    let isEat = false;
    while (restFishArr.length && dir[restFishArr[restFishArr.length - 1]] === right && currFishDir === left) {
      if (size[restFishArr[restFishArr.length - 1]] > currFishSize) {
        break;
      }
      restFishArr.pop();
    }
    // 如果新来的鱼没有被吃掉就入栈
    !isEat && restFishArr.push(i);
  }

  return restFishArr.length;
}

// console.log(solution([4, 2, 5, 3, 1], [1, 1, 0, 0, 0]));
