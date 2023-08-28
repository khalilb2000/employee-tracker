const connection = require('db.js');

class Queries {
    static getAllDepartments(){
        return connection.promise().query('SELECT * FROM department');

        
    }
}
module.exports = Queries;

