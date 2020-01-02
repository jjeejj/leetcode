/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length== 0) {
        return "";
    };
    var len = s.length;
    var maxRes = {
        start: 0,
        end: 0,
        len: 0
    };
    for(var i = 0; i < len - 1; i++) {
        // 中心是一个元素
        var len1Res = expandAroundCenterObj(s, i, i);
        // 中心是两个元素
        var len2Res = expandAroundCenterObj(s, i, i+1);
        if (len1Res.len > len2Res.len && len1Res.len > maxRes.len) {
            maxRes = len1Res;
        };
        if (len2Res.len > len1Res.len && len2Res.len > maxRes.len) {
            maxRes = len2Res;
        };
    };
    return s.substring(maxRes.start, maxRes.end +1);
};

// 找出中心相同的回文的字符串开始结束位置
function expandAroundCenterObj(s, start, end) {
    var len = s.length;
    while (start >=0 && end < len && s[start] == s[end]) {
        --start;
        ++end;
    };  
    return {
        start: start + 1,
        end: end -1,
        len: end - start -1
    };
};

/**
 * ******************************************************
 *  第二种方法
 * *****************************************************
 */
var longestPalindrome = function(s) {
    if (!s || s.length== 0) {
        return "";
    };
    var start = 0;
    var end = 0;
    var len = s.length;
    for(var i = 0; i < len - 1; i++) {
        // 中心是一个元素
        var len1 = expandAroundCenterLen(s, i, i);
        // 中心是两个元素
        var len2 = expandAroundCenterLen(s, i, i+1);
        var maxLen = Math.max(len1, len2);
        if (maxLen > (end - start + 1)) {
            start = i - Math.floor((maxLen -1) / 2);
            end = i + Math.floor(maxLen / 2);
        };
    };
    return s.substring(start, end +1);
};
 // 找出中心相同的回文的字符串的长度
function expandAroundCenterLen(s, start, end) {
    var len = s.length;
    while (start >=0 && end < len && s[start] == s[end]) {
        start--;
        end++;
    };  
    return end - start - 1;
};


// @lc code=end

