USE instagram;
-- In MySQL, sql_safe_updates (or SQL_SAFE_UPDATES) is a mode that prevents you from accidentally running dangerous     UPDATE or DELETE statements that could affect all rows in a table.
 
 SET SQL_SAFE_UPDATES = 0; -- To disable safe update

-- UPDATE: To update existing rows

UPDATE users 
SET followers = 500
WHERE age>=21;

-- DELETE: To delete existing rows

DELETE FROM users
Where age = 23;

-- ALTER: To change the schema
	
    -- ADD Column:
	ALTER TABLE users
    ADD COLUMN country VARCHAR(20) DEFAULT "India",
    ADD COLUMN phone VARCHAR(15);
    
    -- DELETE Column:
    ALTER TABLE users
    DROP COLUMN phone;

	-- RENAME Column:
    
    -- Method 1:
    ALTER TABLE users
    CHANGE COLUMN name username VARCHAR(30); -- With CHANGE COLUMN, always repeat the column’s exact datatype and 	attributes (NOT NULL, DEFAULT, etc.), otherwise they’ll reset
	
    -- Method 2:
    ALTER TABLE users
	RENAME COLUMN followers TO fans; -- Use CHANGE COLUMN if you want compatibility with older versions.

    -- RENAME TABLE:
    ALTER TABLE instauser
    RENAME TO instaUser;
    
    -- Modify Column
    ALTER TABLE instauser
    MODIFY fans INT DEFAULT 5;
    
    INSERT INTO instauser
    (id, username, email)
    VALUES
    (13, "ashish", "dred@gmail.com");
    
    -- TRUNCATE TABLE: To delete table's data
    
    TRUNCATE TABLE posts;
    SELECT * FROM posts