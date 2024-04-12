const Sql = require('./sqlHelpers');
const inquirer = require('inquirer');

class InquirerHelper extends Sql {
    constructor(db) {
        super(db);
    }
        managementOptionfn(){
        inquirer
        .prompt([
        {type: "list",
        message: "What would you like to do?",
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'],
        name: 'managementOption',
    }])
        .then((data) => {
            if (data.managementOption == 'view all departments') {
                this.viewDepartments();
                    if (true) {
                        this.managementOptionfn();
                    }
                
            } else if (data.managementOption == 'view all roles') {
                return;
            } else if (data.managementOption == 'view all employees' ) {
                return;
            } else if (data.managementOption == 'add a department') {
                return;
            } else if (data.managementOption == 'add a role' ) {
                return;
            } else if (data.managementOption == 'add an employee') {
                return;
            } else if (data.managementOption == 'update an employee role' ) {
                return;
            } else if (data.managementoption == 'quit') {
                return;
            }
        });
        }

    logThis(message) {
          console.log(message);
    }
}

const test = new InquirerHelper ();

test.managementOptionfn();

module.exports = InquirerHelper