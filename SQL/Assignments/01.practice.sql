USE college;

CREATE TABLE teacher(
id int PRIMARY KEY,
name VARCHAR(30),
subject VARCHAR(20),
salary INT);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "Ajay", "math", 50000),
(47, "Bharat", "english", 60000),
(18, "Chetan", "chemistr", 45000),
(9, "Divya", "physics", 75000);


SELECT * FROM teacher;

-- Select tecahers whose salary is more than 55k
SELECT name FROM teacher WHERE salary > 55000;

-- Rename the salary column to ctc
ALTER TABLE teacher
RENAME COLUMN salary TO ctc;

-- Update salary of all tecahers by giving them an increment of 25%
SET SQL_SAFE_UPDATES = 0;
UPDATE teacher
SET ctc = ctc + (25/100*ctc);

-- Add a new column city with default value Gurgaon
ALTER TABLE teacher
ADD COLUMN city VARCHAR(20) DEFAULT "Gurgaon";

-- Delete the ctc column
ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;