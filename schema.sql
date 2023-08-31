-- Create a new database
CREATE DATABASE employee_db;

-- Switch to the new database
USE employee_db;

-- Create a table for departments
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Inserting department records
INSERT INTO departments (name) VALUES ('HR');
INSERT INTO departments (name) VALUES ('Engineering');
-- Add more departments as needed

-- Create a table for roles
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Inserting role records
INSERT INTO role (title, salary, department_id) VALUES ('Manager', 60000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 2);
-- Add more role records as needed

-- Create a table for employees
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
