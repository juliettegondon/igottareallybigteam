DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'juliette';

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    departmentname VARCHAR(30),
    PRIMARY KEY (id)
);


CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
    );
    
CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
    );
    
   DESC department;
   DESC role;
   DESC employee;
   
    INSERT INTO department (departmentname)
    VALUES ('Sales');
	INSERT INTO department (departmentname)
    VALUES ('Finance');
	INSERT INTO department (departmentname)
    VALUES ('Tech');
	INSERT INTO department (departmentname)
    VALUES ('HR');
    
    INSERT INTO role (title, salary, department_id)
    VALUES ('Head of Sales', 70000, 1);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Salesperson', 60000, 1);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Accountant', 70000, 2);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Analyst', 80000, 2);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Developer', 100000, 3);
    INSERT INTO role (title, salary, department_id)
    VALUES ('JR Developer', 90000, 3);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Administrator', 60000, 4);
	INSERT INTO role (title, salary, department_id)
    VALUES ('Manager', 10000000, 4);
	
	INSERT INTO employee (first_name, last_name, role_id)
    Values ('Sally','Sellers', 1);
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    Values ('Suzy','Solder', 2, 1);
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    Values ('Abby','Acc', 3, 4);
    INSERT INTO employee (first_name, last_name, role_id)
    Values ('Anna','Lyzer', 4);
    INSERT INTO employee (first_name, last_name, role_id)
    Values ('Danielle','Dev', 5);
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    Values ('Dawn','Hacks', 6, 5);
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    Values ('Addie','Minster', 7, 8);
    INSERT INTO employee (first_name, last_name, role_id)
    Values ('Magge','Mansfield', 8);
    
    
    
    
    