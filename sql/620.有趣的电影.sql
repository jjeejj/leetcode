--
-- @lc app=leetcode.cn id=620 lang=mysql
--
-- [620] 有趣的电影
--

-- @lc code=start
# Write your MySQL query statement below
SELECT * FROM cinema WHERE description != 'boring' AND MOD(id,2) = 1 ORDER BY rating DESC;

-- @lc code=end

