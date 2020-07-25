--
-- @lc app=leetcode.cn id=180 lang=mysql
--
-- [180] 连续出现的数字
--

-- @lc code=start
# Write your MySQL query statement below
SELECT DISTINCT l1.Num as  ConsecutiveNums FROM Logs l1 
INNER JOIN Logs l2 ON l1.id = l2.id - 1 
INNER JOIN Logs l3 ON l2.id = l3.id - 1
WHERE l1.Num = l2.Num and l2.Num = l3.Num;
-- @lc code=end

