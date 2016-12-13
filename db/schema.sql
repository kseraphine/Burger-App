CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);