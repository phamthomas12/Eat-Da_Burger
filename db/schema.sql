DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Impossible Burger",false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Classic Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Burger", true);