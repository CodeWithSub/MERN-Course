use college;

CREATE TABLE student (
    roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO student (roll_no, name, city, marks)
VALUES
(110, 'adam', 'Delhi', 76),
(108, 'bob', 'Mumbai', 65),
(124, 'casey', 'Pune', 94),
(112, 'duke', 'Pune', 80);

SELECT * FROM student WHERE marks > 75; -- select all students who scored 75+

SELECT DISTINCT ciry FROM student; -- Find name of all cities where students are from

 SELECT city FROM student -- Find name of all cities where students are from
 GROUP BY city;
 
  SELECT city, max(marks)  -- Find the maximum marks of students from each city
  FROM student 
  GROUP BY city;
  
  SELECT avg(marks) FROM student; -- Find the average of the class
  
  ALTER TABLE student
  ADD COLUMN grade varchar(2);
  
/*
  SET grade = CASE ... END
  Instead of giving a single value to grade, you use a CASE expression.
  CASE works like an if-else ladder in SQL.
*/
  UPDATE student -- Add a new column and assign grade
  SET grade = CASE
    WHEN marks > 80 THEN '0'
    WHEN marks BETWEEN 70 AND 80 THEN 'A'
    WHEN marks BETWEEN 60 AND 70 THEN '0'
    ELSE grade
  END;


SELECT * FROM student;