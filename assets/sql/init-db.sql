CREATE DATABASE shop-app;

USE shop-app;

CREATE TABLE users (
	id NVARCHAR(255) PRIMARY KEY,
	first_name NVARCHAR(100) NOT NULL,
    last_name NVARCHAR(100) NOT NULL,
    age int NOT NULL
);
