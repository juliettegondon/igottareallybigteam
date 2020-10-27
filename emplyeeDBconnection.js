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

connection.connect((err) => {
    if (err) throw err;
    console.log("Connection was successful, id: " + connection.threadId);
    inq();
 });

//use inquirer to prompt user
function inq(){
    inquirer.prompt({
    type: 'list',
    name: 'init',
    message: 'What would you like to do',
    choices: ['View All Employees', 'View All Departments', 'View All Roles',
'Add Employee', 'Add Department', 'Add Role', 'Update Employee Role']
}).then((answer) => {
    switch (answer.choices) {
        case 'View All Employees':
            viewEmployees();
            break;
       /*  case 'View All Departments':
            viewDepartments();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Update Employee Role':
                update();
                break; */
    }
})
//create functions for each possible choice answer
function viewEmployees(){
    connection.query("SELECT * FROM employees_db.employee",function (err, res){
        if (err) throw err;
        console.log(err);
        console.log(res);
        for (var i = 0; i < res.length; i++){
           console.log(res[i].id + "|" + res[i].first_name + res[i].last_name+ "|" + res[i].role_id+ "|" + res[i].manager_id);
        }
        console.log("------")
        connection.end();
});
}
/* viewDepartments();
viewRoles();
addEmployee();
addDepartment();
addRole();
update(); */
// end of connection to db
// what would you like to do?
// view all employees
// view all employees by department
// view all employees by manager
}