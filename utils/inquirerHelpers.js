const sql = require('./inquirerHelpers');

function managementOptionfn(){
    inquirer
    .prompt([
    {type: "list",
    message: "What would you like to do?",
    choices: ['view all departments', 'view all roles, view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    name: 'managementOption',
}])
.then(data){
 if (data.managementOption == 'view all departments') {
    
 } else if (data.managementOption == 'view all roles') {

 } else if (data.managementOption == 'view all employees' ) {

 } else if (data.managementOption == 'add a department') {

 } else if (data.managementOption == 'add a role' ) {

 } else if (data.managementOption == 'add an employee') {

 } else if (data.managementOption == 'update an employee role' ) {

 }};
};