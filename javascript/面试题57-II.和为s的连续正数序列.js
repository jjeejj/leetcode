/** *
 * 
 * 
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]

示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]

**/

var findContinuousSequence = function(target) {
    var head = 1,  tail = 2; // 滑动窗口的边界,左开右闭区间
    var sum = 1;
    var resArr = []; // 返回的值

    while (tail <= Math.ceil((target + 1)/2)) { // 只可能运行到指定值的一半
        if (sum < target) {
            sum += tail;
            tail++;
        };
        if (sum > target) {
            sum -= head;
            head++;
        };
        if (sum == target) {
            var arr = [], index = 0;
            for (var i = head; i < tail; i++) {
                arr[index++] = i;
            };
            resArr.push(arr);
            sum -= head;
            head++; 
        };
    };
    return resArr;
};