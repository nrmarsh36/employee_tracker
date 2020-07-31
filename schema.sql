DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT default 0,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Frederick", 20);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Kline", 30);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abbie", "Wood", 40);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Timothy", "Rust", 50);



INSERT INTO role (id, title, salary, department_id)
VALUE (10, "Engineer", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE (20, "Accountant", 70000, 2)
INSERT INTO role (title, salary, department_id)
VALUE (30, "Hiring Expert", 80000, 3)
INSERT INTO role (title, salary, department_id)
VALUE (40, "Outside Sales", 120000, 4)
INSERT INTO role (title, salary, department_id)
VALUE (50, "Branch Manager", 200000, 5)


INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Accoutning");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Management");