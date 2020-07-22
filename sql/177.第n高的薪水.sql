--
-- @lc app=leetcode.cn id=177 lang=mysql
--
-- [177] 第N高的薪水
--

-- @lc code=start
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N := N - 1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT Salary FROM Employee GROUP BY Salary ORDER BY Salary DESC LIMIT N, 1
  );
END
-- @lc code=end

