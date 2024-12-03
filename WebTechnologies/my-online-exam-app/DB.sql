-- MySQL Database setup
CREATE DATABASE ExamSystem;

USE ExamSystem;

-- Table for storing student details
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    score INT DEFAULT 0
);

-- Table for storing exam questions
CREATE TABLE exams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    option1 VARCHAR(100),
    option2 VARCHAR(100),
    option3 VARCHAR(100),
    option4 VARCHAR(100),
    answer INT
);
