/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // 统计数字中每个数字出现的次数
    var countMap = new Map(), minCount = deck.length;
    for (var val of deck) {
        var count = countMap.has(val) ? (countMap.get(val) + 1) : 1;
        countMap.set(val, count);
        minCount = minCount > count ? count : minCount; // 出现最小次数的值
    };
    if (minCount < 2) {
        return false;
    };
    // 求所有值的最大公约数
    var result = -1;
    for (var count of countMap.values()) {
        if (count < 2) { // 出现次数小于 2 的直接返回 false
            return false;
        };
        result =  result == -1 ? count : gcd(result, count);
        if (result == 1) {
            return false;
        };
    };
    return result >= 2;
};

// 求两个数的最大公约数
function gcd (a, b) {
    if (b == 0) {
        return a;
    };
    return gcd(b, a%b);
};
// @lc code=end

