const inquirer = require('inquirer');
const sql = require('./sqlHelpers')

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
    name: 'viewDepartments',
    when: (data) => data.choice === 'view all employees'
},
// Add a Department branch
{
    type: "input",
    message: "Please input your new department name",
    name: 'department_name',
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
    choices: ['Customer Service', 'Development', 'Finance', 'Human Resources', 'Marketing'],
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
// add an employee
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
    type: "input",
    message: "Please input employee roleID",
    name: 'roleID',
    when: (data) => data.lastName,
    validate: function (roleDepartment) {
        let input = parseFloat(roleDepartment)
        if (isNaN(input)) {
            console.log("---input must be a number")
            return false
        } else {
            return true
        }
    }
},
{
    type: "input",
    message: "Please input employee managerID",
    name: 'managerID',
    when: (data) => data.roleID,
    validate: function (roleDepartment) {
        let input = parseFloat(roleDepartment)
        if (isNaN(input)) {
            console.log("---input must be a number")
            return false
        } else {
            console.log('---Employee has been added!')
            return true
        }
    }
},
// Update an Employee Role Branch
{
    type: "list",
    message: "Which employee do you want to update?",
    choices: ['Declan', 'Oscar'],
    name: 'updatedEmployeeName',
    when: (data) => data.choice === 'update an employee role',
},
{
    type: "list",
    message: "Which role do you want to assign the selected employee?",
    choices: ['Customer Service Rep', 'Call Center Agent'],
    name: 'updatedEmployeeRole',
    when: (data) => data.updatedEmployeeName,
},
// Quit branch
{
    type: "confirm",
    message: 'Are you sure you want to quit?',
    when: (data) => data.choice === "quit",
}
];

inquirer.prompt(questions);



