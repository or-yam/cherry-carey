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

CREATE TABLE post(
    id int NOT NULL AUTO_INCREMENT ,
    generatedBy_id VARCHAR(30),
    postType VARCHAR(10),
    mealOrigin VARCHAR(30),
    mealName VARCHAR(30),
    mealDate DATE,
    mealTime VARCHAR(30)
    alergies VARCHAR(30),
    kosher BOOLEAN,
    distribution VARCHAR(30),
    status BOOLEAN,
    location ?? ,

    PRIMARY KEY(id),
    
    FOREIGN KEY(generatedBy_id)
    REFERENCES user(id)
)

CREATE TABLE review(
    id int NOT NULL AUTO_INCREMENT ,
    text TEXT(3000),
    cooker_id VARCHAR(30),
    rating INT,

    PRIMARY key(id),

    FOREIGN KEY (cooker_id),
    REFERENCES user(id)
)

