--
-- @lc app=leetcode.cn id=184 lang=mysql
--
-- [184] 部门工资最高的员工
--

-- @lc code=start
# Write your MySQL query statement below
SELECT 
    d.Name as Department, 
    e.Name as Employee, 
    e.Salary as Salary  
FROM Employee e 
INNER JOIN Department d 
ON e.DepartmentId = d.Id 
where 
(e.DepartmentId, e.Salary) 
    in
(SELECT DepartmentId, MAX(Salary) FROM Employee GROUP BY DepartmentId);
-- @lc code=end

