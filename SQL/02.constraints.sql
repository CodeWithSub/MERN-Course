CREATE DATABASE instagram;
USE instagram;

-- CONSTRAINTS : Rules for data in the table

CREATE TABLE IF NOT EXISTS users(
id INT PRIMARY KEY,  -- A column (or set of columns) in a table that uniquely identifies each row. There is one PK and it should be NOT NULL
name VARCHAR(30) NOT NULL, -- Columns can not have a null value
age INT CONSTRAINT age_check CHECK (age >= 16), -- It can limit the values allowed in a column
email VARCHAR(30) UNIQUE,  -- All values in column are different
following INT DEFAULT 0,
followers int DEFAULT 0
);

CREATE TABLE posts(
id INT,
content VARCHAR (100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id)  -- A column (or set of columns) in a table that refers to the PK in another TABLE. FKs can be duplicate & NULL values, There can be multiple FKs. 
);

INSERT INTO users
(id, name, age, email, following, followers)
VALUES -- Insert values into table
(1, "Subhransu", 21, "xyz@gmail.com", 47, 2),
(2, "Ritesh", 19, "abc@gmail.com", 5, DEFAULT),
(3, "Disha", 17, "gfd@gmail.com", 47, 2),
(4, "Subhransu", 21, "yhvhd@gmail.com", DEFAULT, 47);

INSERT INTO posts
(id, content, user_id)
VALUES
(101, "Hello", 2),
(102, "Swagatam", 1),
(103, "Konichiwa", 2),
(104, "Swagata", 4);

SHOW TABLES;