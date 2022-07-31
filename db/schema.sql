DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY(manager_id)
    REFERENCES employee(id),
    FOREIGN KEY(roles_id)
    REFERENCES roles(id)
);