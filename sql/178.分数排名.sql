--
-- @lc app=leetcode.cn id=178 lang=mysql
--
-- [178] 分数排名
--

-- @lc code=start
# Write your MySQL query statement below
SELECT Score, DENSE_RANK() OVER ( ORDER BY SCORE DESC) `Rank`  FROM Scores;
-- @lc code=end

