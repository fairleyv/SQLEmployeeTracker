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

   }
   addEmployee() {

   }
   updateEmployeeRole(){

   }
}





module.exports = SqlHelper;
