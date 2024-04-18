class SqlHelper {
   constructor (db) {
      this.db = db;
   }

    viewDepartments () {
     db.query(`SELECT * FROM department`, function(err, results){
       console.log(results);
    });
   }
   viewAllRoles() {
      db.query(`SELECT * FROM role`, function(err, results){
         console.log(results);
      })
   }
   viewAllEmployees() {
      db.query(`SELECT * FROM employee`, function (err, results) {
         console.log(results);
      })
   }
   addDepartment() {
      db.query(`INSERT INTO department (id, department_name)`, function (err, results) {
         console.log(results);
      })

   }
   addRole () {
      db.query(`INSERT INTO role (id, title, salary, department_id`), function (err, results) {
         console.log('Role Successfully added');
      }
   }
   addEmployee() {
      db.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id)`)
      console.log(`Employee Successfully added`);
   }
   updateEmployeeRole(){
      db.query(`Update `)
   }
}





module.exports = SqlHelper;
