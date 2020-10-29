let mysql = require("mysql");
let inquirer = require("inquirer");
let cTable = require("console.table");
var figlet = require("figlet");

//fun welcome message hehe
figlet('WELCOME', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

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

//use inquirer to prompt user, switch statement to call functions to view or add info to db
function init(){
    inquirer.prompt({
    type: "list",
    name: "init",
    message: "What would you like to do",
    choices: ["View All Employees", "View All Departments", "View All Roles",
    'Add Employee','Add Department', 'Add Role', 'Update Employee Role', "Quit Application"]

}).then((answer) => {
    switch (answer.init) { 
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
        case "Add Employee":
            console.log("ADDING EMPLOYEE");
            addEmployee();
            break;
        case "Add Department":
            console.log("ADDING DEPARTMENT");
            addDepartment();
            break;
        case "Add Role":
            console.log("ADDING ROLE");
            addRole();
            break;
        case "Update Employee Role":
             console.log("UPDATE EMPLOYEE");
             update();
             break;
        case "Quit Application": 
             console.log("Goodbye");
             connection.end();
             break;
    }
});
// simple functions for each possible answer from inquirer prompts upon init();
function viewEmployees(){
        connection.query("SELECT * FROM employee",function (err, res) {
        if (err) throw err;
        console.table(res);
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

// use inquirer.prompt to input employee role, first, and last name
// setup a mysql connection.query to insert info into employee table 
function addEmployee(){ 
inquirer.prompt([
    {
    type: "number",
    name: "employeeRole",
    message: "What is the employee's role ID?"},
    {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?"},
    {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?"}
]).then((answer) => {
    connection.query(
        "INSERT INTO employee SET ?", {
        role_id: answer.employeeRole,
        first_name: answer.firstName,
        last_name: answer.lastName},
        function (err) {
            if (err) throw err;
            console.log ("ADDED EMPLOYEE ---------")
            console.table(answer);
            init();
        }
    )});
}
// use inquirer.prompt to input department name
// setup a mysql connection.query to insert info into department table 
function addDepartment(){ 
inquirer.prompt([
    {type: "input",
    name: "addDepartmentName",
    message: "What is the new department called?"},
    ]).then((answer) => {
        connection.query(
        "INSERT INTO department SET ?", {
            departmentname: answer.addDepartmentName},
            function (err) {
                if (err) throw err;
                console.log ("ADDED EMPLOYEE ---------")
                console.table(answer);
                init();
            }
        )});
}
// use inquirer.prompt to input role title and salary
// setup a mysql connection.query to insert info into role table 
function addRole(){
inquirer.prompt([
    {type: "input",
    name: "addTitle",
    message: "What is the new role called?"},
    {
    type: "number",
    name: "addSalary",
    message: "What is the salary of this role?"}
    ]).then((answer) => {
        connection.query(
            "INSERT INTO role SET ?", {
            title: answer.addTitle,
            salary: answer.addSalary},
            function (err) {
                if (err) throw err;
                console.log ("ADDED ROLE ---------")
                console.table(answer);
                init();
            }
        )}
    );
}

 //use inquirer.prompt to have user select employee name, return employee and role . 
// setup a mysql connection.query to insert info into role ID 

/* OK WHERE IM CURRENTLY AT... TRYING TO FIGURE OUT HOW TO GET THE CURRENT TABLE OF EMPLOYEES
INTO AN EMPTY ARRAY TO PRESENT AS CHOICES IN THE PROMPT... THINKING  
A FOR LOOP AND ITERATE THROUGH THE ARRAY
 */
function update() {
    const employeesArray = [];
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.log( "----- UPDATING IN PROGRESS ------")
        console.table(res);
    });
}
inquirer.prompt([{
    type: "list",
    name: "updateEmployee",
    message: "Which employee would you like to update?",
    choices:["CALL ARRAY HERE"]
},
{
    type: "list",
    name: "updateName",
    message: "Are you changing the first name, last name, or role?",
    choices: ["First Name", "Last Name", "Role"]
}
])
// end of connection to db
//connection.end();
}