DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;

USE crowdfund_db;


CREATE TABLE user(
id INT PRIMARY KEY ,
name VARCHAR(25) ,
password VARCHAR(255) 
); 


