USE instagram;

INSERT INTO users (id, name, age, email, following, followers)
VALUES (5, 'Ananya', 22, 'ananya22@gmail.com', 145, 590),
(6, 'Kunal', 25, 'kunal25@gmail.com', 38, 3),
(7, 'Priya', 20, 'priya20@gmail.com', 359, 3652),
(8, 'Arjun', 23, 'arjun23@gmail.com', 14, 7),
(9, 'Sneha', 18, 'sneha18@gmail.com', 5, 12),
(10, 'Rahul', 24, 'rahul24@gmail.com', 60, 33),
(11, 'Meera', 21, 'meera21@gmail.com', 457, 160),
(12, 'Aditya', 26, 'aditya26@gmail.com', 22, 15);

-- WHERE clause: To define some conditions

SELECT name,followers FROM users
WHERE followers >= 50; 

-- Operators in WHERE
SELECT * FROM users WHERE age + 1 = 27;

SELECT name FROM users WHERE
age > 21 AND followers >= 300; -- AND: To check for both conditions to be true

SELECT name FROM users WHERE
age > 21 OR following <= 15; -- OR: To check for one of the conditions to be true

SELECT name,age,followers FROM users
WHERE age BETWEEN 16 AND 21; -- BETWEEN: Select for a given range

SELECT name, email FROM users -- IN: Matches any values in the list
WHERE email IN ("meera@gmail.com", "xyz@gmail.com", "arjun23@gmail.com");

SELECT * FROM users WHERE id NOT IN (3,6); -- NOT IN: To negate the given condition

-- LIMIT Clause: Sets an upper limit on number of tuples to be returned

SELECT * FROM users
LIMIT 4;

-- ORDER BY Clause: To sort in ascending/descending order (Default: ASCE)

SELECT * FROM users WHERE id >= 4 
ORDER BY id ASC;

-- Aggregate functions: Performs a calculation on a set of values & returns a single VALUES

SELECT COUNT(*) FROM users;
SELECT MIN(age) FROM users;
SELECT MAX(age) FROM users;
SELECT avg(followers) FROM users;
SELECT sum(followers) FROM users;

-- GROUP BY Clause: Group rows that have same values into summary rows

SELECT age, max(followers) FROM users
GROUP BY age;

-- HAVING Clause: Similar to WHERE i.e. applies some condition on rows but it is used when we want to apply any condition after grouping.
-- Grouping is necessary

SELECT age, max(followers) 
FROM users
GROUP BY age 
HAVING max(followers) > 100 -- WHERE is for the TABLE & HAVING is for a group
ORDER BY age DESC;

-- General order:
-- SELECT
-- FROM
-- GROUP BY
-- HAVING
-- ORDER BY



 

