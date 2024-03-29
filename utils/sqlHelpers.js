const mysql = require('mysql2');

class SqlHelper {
   constructor (db) {
      this.db = db;
   }

   viewDepartments() {
    db.query(`SELECT * FROM department`, function(err, results){
       console.log(results);
    });
   }

}





module.exports = SqlHelper;
