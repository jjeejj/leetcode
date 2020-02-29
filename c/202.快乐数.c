/*
 * @lc app=leetcode.cn id=202 lang=c
 *
 * [202] 快乐数
 */

// @lc code=start


bool isHappy(int n){
    int p = n, q = getNext(n);
    while(q != 1) {
        p = getNext(p);
        q = getNext(getNext(q));
        if (p == q) {
            return false;
        };
    };
    return true;
}

int getNext(int n) {
    int res = 0;
    while (n != 0) {
        res += (n % 10) * (n % 10);
        n = n / 10;
    };
    return res;
}


// @lc code=end

