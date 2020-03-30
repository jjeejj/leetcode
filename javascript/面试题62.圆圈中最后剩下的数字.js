/**
 * 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

示例 1：

输入: n = 5, m = 3
输出: 3

示例 2：

输入: n = 10, m = 17
输出: 2

 

限制：

    1 <= n <= 10^5
    1 <= m <= 10^6
 */
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 利用链表来解答(当 n 和 m  很大时 执行时间会超时) O(mn)
var lastRemaining = function(n, m) {
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push(i);
    };
    while (list.length > 1) {
        // 处理要删除的数据
        for (var j = 0; j < m; j++) {
            if (j != m -1) {
                list.push(list.shift())
            } else {
                list.shift();
            };
        };
    };
    return list[0];
};

// 利用确定下一次删除位置的索引 解题
var lastRemaining = function(n, m) {
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push(i);
    };
    // 第一次要删除的位置为
    var index = (m -1) % n;
    while (list.length > 1) {
        list.splice(index, 1);
        index = (index + m - 1) % list.length;
    };
    return list[0];
};

// 利用数学方法来解题-- 约瑟夫环
var lastRemaining = function(n, m) {
    var flag = 0;   
    for (var i = 2; i <= n; i++) {
        flag = (flag + m) % i;
    };
    return flag;
};