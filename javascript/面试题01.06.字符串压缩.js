/** 
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 * 
 * 示例1:
 输入："aabcccccaaa"
 输出："a2b1c5a3"

示例2:
 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。

提示：
    字符串长度在[0, 50000]范围内。
*/
/**
 * @param {string} S
 * @return {string}
 */
// 和前一个数进行比较看是否相等的解法
var compressString = function(S) {
    if (S.length <= 1) {
        return S;
    };
    var res = "", preIndex = 0;
    for (var i = 1; i < S.length; i++) {
        if (S[i] != S[preIndex]) {
            res +=  (S[preIndex] + (i - preIndex));
            preIndex = i;
        };
    };
    res +=  (S[preIndex] + (i - preIndex));
    if (res.length >= S.length) {
        res = S;
    };
    return res;
};

// 记录每个数出现的次数的解法, 多循环一位方便进行右边的边界处理
var compressString2 = function(S) {
    if (S.length <= 1) {
        return S;
    };
    var res = "", currValue = S[0], count = 1;
    for (var i = 1; i <= S.length; i++) {
        if (S[i] == currValue) {
            count++;
        } else {
            res += (currValue + count);
            currValue = S[i];
            count = 1;
        };
    };
    if (res.length >= S.length) {
        res = S;
    };
    return res;
};