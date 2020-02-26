/*
 * @lc app=leetcode.cn id=504 lang=c
 *
 * [504] 七进制数
 */

// @lc code=start


char * convertToBase7(int num){
    if (num == 0 ) {
        return "0";
    }
    int i ,digit = 0, flag = num >0?0:1;
    int copy = num >0 ? num : -1*num;
    int num = copy;
    while(num) {
        digit++;
        num /= 7;
    }
    // 声明需要返回的大小
    // char s[digit+flag+1];
}


// @lc code=end

