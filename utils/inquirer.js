const inquirer = require('inquirer');
const mysql = require('mysql2')

// Arrays for selecting roles, managers, and employees in inquirer.
const managerArray = ['Declan McClain', 'Oscar Sanches', 'Ismail Abbas', 'Nadia Bakshi', 'Cristina Charles', 'Marcella Ayala', 'Loren Marks', 'Benny Price', 'Ivory Short', 'Guillermo Wagner'];
const roleArray = ['Customer Service Rep', 'Call Center Agent', 'Customer Service Manager', 'Chief Customer Officer', 'Product Manager', 'Software Developer', 'Software Architect', 'Accountant', 'Budget Analyst', 'Finance Administrator', 'Chief Finance Officer', 'Finance Manager', 'Human Resources Representative', 'Human Resources Supervisor', 'Chief Human Resources Officer', 'Product Marketer', 'Event Planner', 'Marketing Analyst','Marketing Manager', 'Chief Marketing Officer'];
const employeeArray = ['Declan McClain', 'Oscar Sanches', 'Ismail Abbas', 'Nadia Bakshi', 'Melanie Cooper', 'Verna Santiago', 'Jimmy Shaffer', 'Vanessa Fernandez', 'Cristina Charles', 'Marcella Ayala', 'Grace Davies', 'Anita Jones', 'Casey Montes', 'Elsie Spears', 'Loren Marks', 'Rey Hudson', 'Rodrigo Prince', 'Tamika Floyd', 'Reynaldo Benjamin', 'Benny Price', 'Lea Goodman', 'Nanette Kent', 'Deann Wise', 'Ivory Short', 'Guillermo Wagner', 'Bridget Mayer', 'Faith Bentley', 'Armand Burch'];
const departmentArray = ['Customer Service', 'Development', 'Finance', 'Human Resources', 'Marketing'];


// Questions to input into inquirer.
const questions = [
    {type: "list",
    message: "What would you like to do?",
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'],
    name: 'choice',
}, 
// View all Departments Branch
{
    type: "confirm",
    message: "View all Departments?",
    name: 'viewDepartments',
    when: (data) => data.choice === 'view all departments'
},
// View all Roles Branch
{
    type: "confirm",
    message: "View all Roles?",
    name: 'viewRoles',
    when: (data) => data.choice === 'view all roles'
},
// View all Employees Branch
{
    type: "confirm",
    message: "View all Employees?",
    name: 'viewEmployees',
    when: (data) => data.choice === 'view all employees'
},
// Add a Department branch
{
    type: "input",
    message: "Please input your new department name",
    name: 'departmentName',
    when: (data) => data.choice ==='add a department',
    validate: function (lastName){
        let input = parseFloat(lastName);
        if (isNaN(input)) {
            return true;
        } 
        console.log(`---Input must not be a number`);
        return false;
    }
},
// Add a role branch
{
    type: "input",
    message: "Please input new role title",
    name: 'roleTitle',
    when: (data) => data.choice === "add a role",
    validate: function (lastName){
        let input = parseFloat(lastName);
        if (isNaN(input)) {
            return true;
        } 
        console.log(`---Input must not be a number`);
        return false;
    }
},
{
    type: "input",
    message: "Please input new role salary",
    name: 'roleSalary',
    when: (data) => data.roleTitle,
    validate: function (roleSalary) {
        let input = parseFloat(roleSalary)
        if (isNaN(input)) {
            console.log("---input must be a number")
            return false
        } else {
            return true
        }
    }
},
{
    type: "list",
    message: "What department does the role belong to?",
    choices: departmentArray,
    name: 'roleDepartment',
    when: (data) => data.roleSalary,
    validate: function (roleDepartment) {
        let input = parseFloat(roleDepartment)
        if (isNaN(input)) {
            console.log("---input must be a number")
            return false
        } else {
            console.log('---Role has been added!')
            return true
        }
    }
},
// add an employee branch
{
    type: "input",
    message: "Please input employee first name",
    name: 'firstName',
    when: (data) => data.choice ==='add an employee',
    validate: function (lastName){
        let input = parseFloat(lastName);
        if (isNaN(input)) {
            return true;
        } 
        console.log(`---Input must not be a number`);
        return false;
    }
},
{
    type: "input",
    message: "Please input employee last name",
    name: 'lastName',
    when: (data) => data.firstName,
    validate: function (lastName){
        let input = parseFloat(lastName);
        if (isNaN(input)) {
            return true;
        } 
        console.log(`---Input must not be a number`);
        return false;
    }
},
{
    type: "list",
    message: "What is the employee's role?",
    name: 'roleID',
    choices: roleArray,
    when: (data) => data.lastName,
},
{
    type: "list",
    message: "Who is the employee's Manager?",
    name: 'managerID',
    choices: managerArray,
    when: (data) => data.roleID,
},
// Update an Employee Role Branch
{
    type: "list",
    message: "Which employee do you want to update?",
    choices: employeeArray,
    name: 'updatedEmployeeName',
    when: (data) => data.choice === 'update an employee role',
},
{
    type: "list",
    message: "Which role do you want to assign the selected employee?",
    choices: roleArray,
    name: 'updatedEmployeeRole',
    when: (data) => data.updatedEmployeeName,
},
// Quit branch
{
    type: "confirm",
    message: 'Are you sure you want to quit?',
    name: 'quit',
    when: (data) => data.choice === "quit",
}
];

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootroot',
      database: 'employee_db'
    },
  
    console.log(`Connected to the employee_db database.`)
  );


class Inquirer {
    constructor (db) {
        this.db = db;
    }
    inquire() {
        inquirer.prompt(questions)
        .then (data => {
            console.log(data.viewDepartments)
            if(data.viewDepartments) {
                console.log(data.viewDepartments);
                db.query(`SELECT * FROM department`, function(err, results){
                    console.table(results);
            });
        }
        if(data.viewRoles) {
            db.query(`SELECT * FROM role`, function(err, results){
                console.table(results);
             })
        }
        if (data.viewEmployees) {
            db.query(`SELECT * FROM employee`, function (err, results) {
                console.table(results);
             })
        }
        if(data.choice === 'add a department'){
            db.query(`INSERT INTO department (department_name) VALUES ("${data.departmentName}")`, function (err, results) {
            })
            departmentArray.push(data.departmentName);
            
        console.log('Department has been added!')
        }
        if(data.choice === 'add a role'){
            let departmentNum = departmentArray.indexOf(data.roleDepartment) + 1;

            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${data.roleTitle}", "${data.roleSalary}", "${departmentNum}")`, function (err, results) {
            })
            roleArray.push(data.roleTitle);
            console.log("Role has Been added!")
        }
        if (data.choice === 'add an employee') {
            console.log(typeof(data.roleID));
            let roleNum = roleArray.indexOf(data.roleID) + 1;
            let managerNum = managerArray.indexOf(data.managerID) + 1;

            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.firstName}","${data.lastName}","${roleNum}","${managerNum}")`, function(err, results){
            })
            employeeArray.push(`${data.firstName} ${data.lastName}`);
        console.log('Employee has been added');
        }
        if (data.choice === 'update an employee role'){
            let employeeNum = employeeArray.indexOf(data.updatedEmployeeName)+ 1;
            let roleNum = roleArray.indexOf(data.updatedEmployeeRole) +1;
            db.query(`UPDATE employee SET role_id = "${roleNum}" WHERE id = ${employeeNum}`, function(err, results){
            });
            console.log('Employee Updated')
        }
        if (data.quit) {
            console.log(`Thank you for using Employee Tracker! Have a nice day!`);
            process.exit();
        } else {
            this.inquire();
        }
    });
    }
    
        
}

const CLI = new Inquirer;
CLI.inquire();




