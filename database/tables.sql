USE cherryDb;

-- CREATE TABLE user(
--     id int NOT NULL AUTO_INCREMENT ,
--     name VARCHAR(30),
--     email VARCHAR(30),
--     password VARCHAR(30),
--     img VARCHAR(30),
--     PRIMARY KEY(id)
-- );

-- DROP TABLE user;

-- CREATE TABLE post(
--     id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--     generatedBy_id int NOT NULL ,
--     postType VARCHAR(10) ,
--     mealOrigin VARCHAR(30) ,
--     mealName VARCHAR(30) ,
--     mealDate VARCHAR(50) ,
--     mealTime VARCHAR(30),
--     allergies VARCHAR(30),
--     kosher BOOL,
--     distribution VARCHAR(30),
--     status BOOL,
--     locationLat FLOAT(17, 15),
--     locationLng FLOAT(17, 15),
--     price  INT,
    
--     FOREIGN KEY(generatedBy_id) 
--     REFERENCES user(id)
-- );

-- DROP TABLE post;

-- CREATE TABLE review(
--     id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--     text TEXT(3000),
--     cooker_id int NOT NULL,
--     rating INT,


--     FOREIGN KEY (cooker_id)
--     REFERENCES user(id)
-- );

-- DROP TABLE review;