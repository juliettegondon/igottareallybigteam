let mysql = require("mysql");
let inquirer = require("inquirer");
let consoletable= require("console.table");
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"juliette",
    database: "employees_db",
});

//create connection.connect
//use inquirer to prompt user
// what would you like to do?
// view all employees
// view all employees by department
// view all employees by manager
// BONUS TO add, remove, update emplyee

