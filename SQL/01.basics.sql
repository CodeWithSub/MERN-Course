CREATE DATABASE college;
CREATE DATABASE xyz;
DROP DATABASE xyz;
USE college;

-- Table creation
CREATE TABLE student (
 roll_no INT,
 name VARCHAR (30),
 age INT
);

-- Inserting data
INSERT INTO student
VALUES
(101,"Subhransu",21),
(102,"Ritesh",19),
(103,"Bunty",18);

SHOW TABLES;
SHOW DATABASES;
SELECT * FROM student;

CREATE DATABASE IF NOT EXISTS college;