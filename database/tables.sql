USE cherryDb;

CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT ,
    name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30),
    img VARCHAR(30),
    PRIMARY KEY(id)
);

-- DROP TABLE user;