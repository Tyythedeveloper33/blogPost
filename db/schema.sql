DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;

USE crowdfund_db;

CREATE TABLE users(
id INT AUTO_INCREMENT ,
username VARCHAR(25) NOT NULL,
password VARCHAR(25) NOT NULL
); 