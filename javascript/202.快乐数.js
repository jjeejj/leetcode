/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var p = n, q = getNext(n);
    while(q != 1) {
       p = getNext(p);
       q = getNext(getNext(q));
       if (p == q) {
          return false;
       };
    };
    return true;
};

// 获取下一个数
var getNext = function(n) {
    var res = 0;
    while (n) {
        res += (n % 10) * (n % 10);
        n = Math.floor(n / 10);
    };
    return res;
};
// @lc code=end

