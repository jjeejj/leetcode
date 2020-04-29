/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 *
 * https://leetcode-cn.com/problems/super-egg-drop/description/
 *
 * algorithms
 * Hard (20.48%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    16.6K
 * Total Submissions: 63.3K
 * Testcase Example:  '1\n2'
 *
 * 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。
 * 
 * 每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。
 * 
 * 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 
 * 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。
 * 
 * 你的目标是确切地知道 F 的值是多少。
 * 
 * 无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：K = 1, N = 2
 * 输出：2
 * 解释：
 * 鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
 * 否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
 * 如果它没碎，那么我们肯定知道 F = 2 。
 * 因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
 * 
 * 
 * 示例 2：
 * 
 * 输入：K = 2, N = 6
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 输入：K = 3, N = 14
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= K <= 100
 * 1 <= N <= 10000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
// 该方法会执行超时
var superEggDrop = function(K, N) {
    // 状态 定义 dp[i][j] 代表 i 层 需要最少的实现次数
    var dp = [];
    // 初始化值
    for (i = 0; i <= N; i++) {
        dp.push([]);
        for (var j = 0; j<= K; j++) {
            dp[i][j] = N+1; // 初始化一个较大的值
            if (i == 1) { // 如果楼层为 1 ，则需要的实现次数为1
                dp[i][j] = 1;
            };
            if (j == 1) { // 如果鸡蛋数为 1，则需要的实现次数为i
                dp[i][j] = i;
            };
            if (j == 0) { // 如果鸡蛋数为 0 ，则需要的实现次数为0 没意思
                dp[i][j] = 0;
            };
            if (i == 0) { // 如果楼层为 0 ，则需要的实现次数为0 没意思
                dp[i][j] = 0;
            };
        };
    };
    // 然后后面进行循环，从第二层 和第二个鸡蛋开始
    for (var i = 2; i <= N; i++) {
        for (var j = 2; j <=K; j++) {
            for (var k = 1; k <=i; k++) { // 代表 从第几层开始实现
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k-1][j-1], dp[i-k][j]));
            };
        };
    };
    return dp[N][K];
};

/**
 * 
状态：dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层
转移方程：dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + 1
一维优化版：dp[i] = dp[i-1] + dp[i] + 1
dp[i] 表示当前次数下使用i个鸡蛋可以测出的最高楼层
 */
var superEggDrop = function(K, N) {
    let dp = Array(K+1).fill(0)
    let cnt = 0
    while (dp[K] < N){
        cnt++
        for (let i=K; i>0; i--){
            dp[i] = dp[i-1] + dp[i] + 1
        }
    }
    return cnt;
};
// @lc code=end

