USE employee_tracker_db;



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 10, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Frederick", 20, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Kline", 30, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abbie", "Wood", 40, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Timothy", "Rust", 50, 0);

INSERT INTO role (id, title, salary, department_id)
VALUE (10, "Engineer", 100000.00, 1);
INSERT INTO role (id, title, salary, department_id)
VALUE (20, "Accountant", 70000.00, 2);
INSERT INTO role (id, title, salary, department_id)
VALUE (30, "Hiring Expert", 80000.00, 3);
INSERT INTO role (id, title, salary, department_id)
VALUE (40, "Outside Sales", 120000.00, 4);
INSERT INTO role (id, title, salary, department_id)
VALUE (50, "Branch Manager", 200000.00, 5);

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

-- SELECT * FROM employee