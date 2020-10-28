let mysql = require("mysql");
let inquirer = require("inquirer");
let cTable = require("console.table");


let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"juliette",
    database: "employees_db",
});

//create connection.connect

connection.connect((err) => {
    if (err) throw err;
    console.log("Connection successful! ID: " + connection.threadId + "\n");
    
// initialize CLI app! 
    init();
 });

//use inquirer to prompt user
function init(){
    inquirer.prompt({
    type: "list",
    name: "init",
    message: "What would you like to do",
    choices: ["View All Employees", "View All Departments", "View All Roles", "Quit Application"/*  ,
    'Add Employee', 'Add Department', 'Add Role', 'Update Employee Role'*/]
}).then((answer) => {
    switch (answer.choices) { 
        //add breaks when done writing functions
        case "View All Employees":
                console.log("VIEW EMPLOYEES:");
                viewEmployees();
                break;
       case "View All Departments":
                console.log("VIEW DEPARTMENTS:");
                viewDepartments();
                break;
        case "View All Roles":
                console.log("VIEW ROLES:");
                viewRoles();
                break;
        case "Quit Application": 
                console.log("Goodbye");
                connection.end();
       /*  case "Add Employee":
            addEmployee();
        case "Add Department":
            addDepartment();
        case "Add Role":
            addRole();
        case "Update Employee Role":
             update(); */
    }
});
// create functions for each possible inq answer
function viewEmployees(){
        connection.query("SELECT * FROM employee",function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log(cTable);
        init();
});
}
function viewDepartments(){
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
};
function viewRoles(){
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
};

/* PSEUDOCODING!!!

// functions not yet tested & subject to change
function addEmployee(); 

// use inquirer.prompt to input firstname, lastname, and role. 
// setup a mysql connection.query to insert info into employee table 
inquirer.prompt({
    type: "input",
    name: "addEmployeeRole",
    message: "What is the employee's role?"},
    {
    type: "input",
    name: "firstname",
    message: "What is the employee's first name?"
    },
    {
    type: "input",
    name: "lastname",
    message: "What is the employee's last name?"
    });
    
function addDepartment(); 
// use inquirer.prompt to input departmentname. 
// setup a mysql connection.query to insert info into department table 
inquirer.prompt({
    type: "input",
    name: "addDepartmentName",
    message: "What is the new department called?"
});

function addRole(); 
// use inquirer.prompt to input title and salary. 
// setup a mysql connection.query to insert info into role table 
inquirer.prompt({
    type: "input",
    name: "addtitle",
    message: "What is the new role called?"},
    {
    type: "input",
    name: "addsalary",
    message: "What is the salary of this role?"
});

function update(); 
// use inquirer.prompt to have user select employee name, return employee and role . 
// setup a mysql connection.query to insert info into role ID 
inquirer.prompt({
    type: "list",
    name: "updateEmployee",
    message: "Which employee would you like to update?"}
    choices: //// VIEW ALL EMPLOYEES FUNCTION,
    {
    type: "list",
    name: "updateName",
    message: "Are you changing the first name, last name, or role?"
    choices: ["First Name", "Last Name", "Role"]
};) */

// end of connection to db
//connection.end();
}