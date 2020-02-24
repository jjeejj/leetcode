/*
 * @lc app=leetcode.cn id=371 lang=c
 *
 * [371] 两整数之和
 */

// @lc code=start


int getSum(int a, int b){
    int temp = 0;
    while ((a & b) != 0) { // 有进位的值，双1
        temp = a;
        a = (unsigned int)(a & b) << 1;
        b = (temp ^ b);
    };
    return a | b;
}


// @lc code=end

